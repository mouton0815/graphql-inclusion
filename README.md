# GraphQL Schema Inclusion
The project demonstrates the inclusion of a separated graph in Apollo server.

This is **not** schema federation — the schemas to combine must use non-overlapping type names.

## Preconditions
The graph to be included is hosted by a different service.
Please check out project https://github.com/mouton0815/graphql-with-dgs and run the service as described there.

## Build the Project
```shell
npm install
npm run generate
```

## Start the Server
```shell
npm start
```

## GraphQL Queries

The interactive Apollo client is reachable at
```
http://localhost:4000
```

You can run queries on the local schema, for example:
```graphql
query {
  stores {
    name
    address {
      street
      city
    }
  }
}
```
And you can run queries (or mutations) on the remote schema:
```graphql
query {
  authors {
    name
    birth
    books {
      title
      year  
    }
  }
}
```
