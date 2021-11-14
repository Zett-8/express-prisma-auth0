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
