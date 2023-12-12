klequis/hello-prisma-neon moved to a Next.js project

# Migration Process

There was very little magic here.

## seed.ts to seed.mjs

The next.js default project handles modules differently.

- Got error, "can't use import outside of module".
- fix: change file extension to .mjs

This needs some research to confirm the correct solution.

## add packages

### dependencies

- @prisma/client

### devDependencies

- @types/node
- prisma
- ts-node
- typescript (not sure is needed, let's see)

## package.json

Add root node

```json
"prisma": {
  "seed": "ts-node prisma/seed.mjs"
},
```

## Import files from hello-prisma-neon

- schema.prisma (replace the existing one)
- seed.ts (as seed.mjs)

> That is it
