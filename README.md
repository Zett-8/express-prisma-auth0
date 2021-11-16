# WIP

## Prisma 

#### Create migrations
```shell
prisma migrate dev
```

#### Apply all migration files to prod
```shell
prisma migrate deploy
```

#### Seed DB
```json
// package.json

{
  "prisma": {
    "seed": "ts-node ./prisma/seed.ts"
  }
}
```

```shell
prisma db seed
```

#### Reset DB
*This command should be run only on localhost  
*Delete all data and populate DB with seed data
```shell
prisma migrate reset
```

#### Generate prisma client
*need to run this command after editing schema
```shell
prisma generate
```
