import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'4hrkqh93',
  dataset:'production',
  apiVersion:'sk3AL3Wu4capccX4QG1KZEtYuzw5v2uZktFng7UI2QSthVD6sAMBwk3XOY1BDE6emJQccfb4aWuTDtqtdIDDVjtMUe2hWOAEg7X5BolvMDSYwarTWxP76FuUfo8ev6HgjuwaitP7RuXwTAiYVhl1DPvjuycNpQFOPIz4vwmDMkgIB7CdREST'
  ,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
