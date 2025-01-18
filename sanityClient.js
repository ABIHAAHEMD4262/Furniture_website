import { createClient } from '@sanity/client';


const client = createClient({
  projectId: '4hrkqh93', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: '', // Replace with your Sanity API token
});


export default client;
