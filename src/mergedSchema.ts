import { localTypeDefs } from './localSchema'
import { localResolvers } from './localResolvers'
import { getRemoteSchema } from './remoteSchema'
import { mergeSchemas } from '@graphql-tools/schema'

// Requires the remove GraphQL to be running on startup
const remoteSchema = await getRemoteSchema('http://localhost:8080/graphql')

export const mergedSchema = mergeSchemas({
    schemas: [remoteSchema],
    typeDefs: localTypeDefs,
    resolvers: [localResolvers]
})