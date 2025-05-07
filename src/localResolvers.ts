import { Resolvers } from './generated/resolvers-types.js'
import { stores } from './localData'

export const localResolvers : Resolvers = {
    Query: {
        stores: () => {
            return stores
        },
        store: (_, { name }) => {
            const store = stores.find(store => store.name === name)
            if (!store) {
                throw new Error(`A store with name '${name}' does not exist`)
            }
            return store
        }
    },
}