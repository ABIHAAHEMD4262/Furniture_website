import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:'4hrkqh93',
  dataset:'production',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
