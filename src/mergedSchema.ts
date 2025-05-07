import { localTypeDefs } from './localSchema'
import { localResolvers } from './localResolvers'
import { getRemoteSchema } from './remoteSchema'
import { mergeSchemas } from '@graphql-tools/schema'

const remoteSchemas = await Promise.all([
    getRemoteSchema('http://localhost:8080/graphql')
    // Add additional remote schema requests here
])

export const mergedSchema = mergeSchemas({
    schemas: remoteSchemas,
    typeDefs: localTypeDefs,
    resolvers: [localResolvers]
})