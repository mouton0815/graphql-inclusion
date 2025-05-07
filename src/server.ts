import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { localTypeDefs } from './localSchema'
import { localResolvers } from './localResolvers'
import { getRemoteSchema } from './remoteSchema'
import { mergeSchemas } from '@graphql-tools/schema'

const remoteSchema = await getRemoteSchema()

const mergedSchema = mergeSchemas({
    schemas: [remoteSchema],
    typeDefs: localTypeDefs,
    resolvers: [localResolvers]
})

const server = new ApolloServer({ schema: mergedSchema })
const { url } = await startStandaloneServer(server, { listen: { port: 4000 }})
console.log(`Apollo server ready at ${url}`)