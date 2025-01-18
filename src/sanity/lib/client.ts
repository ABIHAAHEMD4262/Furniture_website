import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'4hrkqh93',
  dataset:'production',
  apiVersion:'2023-10-10',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
