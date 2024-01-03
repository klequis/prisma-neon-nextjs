## Generate artifacts (e.g. Prisma Client)

```bash
$ npx prisma generate
```

## Push the Prisma schema state to the database

- Good to use when doing data modeling
- Evokes `generate`

```bash
$ npx prisma db push
```

## Seed the db

```bash
$ npx prisma db seed
```

### Options

`--force-reset`     will clear out the data


