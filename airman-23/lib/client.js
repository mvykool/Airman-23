const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 's5ctshas',
  dataset: 'bikeshop',
  apiVersion: '2022-12-11', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, 
})