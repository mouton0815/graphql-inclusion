import { loadSchema } from '@graphql-tools/load'
import { UrlLoader } from '@graphql-tools/url-loader'
import { wrapSchema } from '@graphql-tools/wrap'
import { fetch } from 'cross-fetch'

export async function getRemoteSchema(url: String) {
    const schema = await loadSchema(url, {
        loaders: [new UrlLoader()],
        fetch,
    })

    return wrapSchema({
        schema,
    })
}
