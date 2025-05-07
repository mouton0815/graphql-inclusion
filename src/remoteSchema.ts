import { loadSchema } from '@graphql-tools/load'
import { UrlLoader } from '@graphql-tools/url-loader'
import { wrapSchema } from '@graphql-tools/wrap'
import { fetch } from 'cross-fetch'

export async function getRemoteSchema() {
    const schema = await loadSchema('http://localhost:8080/graphql', {
        loaders: [new UrlLoader()],
        fetch,
    })

    return wrapSchema({
        schema,
    })
}
