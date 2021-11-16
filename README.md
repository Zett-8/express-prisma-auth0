# Express + Prisma + Auth0

## Protect endpoints 
Tricky part is here

```js
import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'

const auth0Config = {
  issuer: process.env.AUTH0_ISSUER,
  audience: process.env.AUTH0_AUDIENCE,
  algorithms: ['RS256'],
}

export const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: `${auth0Config.issuer}.well-known/jwks.json`,
  }),
  ...auth0Config,
})
```

Then use it for endpoints where you want to protect.  
Only Authenticated users can implement the endpoint with Bearer Token.

```js
import { jwtCheck } from './jwtCheck'

app.get('/sample', jwtCheck, (req, res) => {
  res.sendStatus(200)
})
```

All required environment variables are the following,

```text
AUTH0_DOMAIN=*******.us.auth0.com
AUTH0_CLIENT_ID=*******
AUTH0_ISSUER=https://*******.us.auth0.com/
AUTH0_AUDIENCE=https://*******.us.auth0.com/api/v2/
```

You can find them on Auth0 dashboard,  
```text
DOMAIN: Auth0 dashboard -> Applications -> Settings -> Domain  
CLIENT_ID: Auth0 dashboard -> Applications -> Settings -> Client ID  
ISSUER: https://<DOMAIN>/  
AUDIENCE: Auth0 dashboard -> APIs -> API Audience  
```

*Do not forget to put trailing slash at the end of ISSUER and AUDIENCE.  
Don't know why but without trailing slash, it didn't work well in my case.

<img src="https://github.com/Zett-8/images/blob/master/express-prisma-auth0/sc_auth0.jpg" />




## Prisma commands

### Create migrations
```shell
prisma migrate dev
```

### Apply all migration files to prod
```shell
prisma migrate deploy
```

### Seed DB
add to package.json
```json
{
  "prisma": {
    "seed": "ts-node ./prisma/seed.ts"
  }
}
```

```shell
prisma db seed
```

### Reset DB
*This command should be run only on localhost  
*Delete all data and populate DB with seed data
```shell
prisma migrate reset
```

### Generate prisma client
*need to run this command after editing schema
```shell
prisma generate
```
