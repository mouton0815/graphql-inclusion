import { Store } from './generated/resolvers-types'

export const stores : Array<Store> = [
    {
        name: 'Dussman',
        address: {
            street: 'Friedrichstraße 90',
            zip: '10117',
            city: 'Berlin',
            country: 'Germany'
        }
    },
    {
        name: 'Librairie Galignani',
        address: {
            street: '224 Rue de Rivoli',
            zip: '75001',
            city: 'Paris',
            country: 'France'
        }
    }
]
