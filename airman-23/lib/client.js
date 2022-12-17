const sanityClient = require('@sanity/client')
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId: 's5ctshas',
  dataset: 'production',
  apiVersion: '2022-12-11', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, 
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);