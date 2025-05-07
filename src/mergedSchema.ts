import { localTypeDefs } from './localSchema'
import { localResolvers } from './localResolvers'
import { getRemoteSchema } from './remoteSchema'
import { mergeSchemas } from '@graphql-tools/schema'

const remoteSchema = await getRemoteSchema()

export const mergedSchema = mergeSchemas({
    schemas: [remoteSchema],
    typeDefs: localTypeDefs,
    resolvers: [localResolvers]
})