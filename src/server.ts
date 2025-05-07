import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { mergedSchema } from './mergedSchema'

const server = new ApolloServer({ schema: mergedSchema })
const { url } = await startStandaloneServer(server, { listen: { port: 4000 }})
console.log(`Apollo server ready at ${url}`)