

export default {
    name: "collection",
    title: "Collection",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image"}],
            options: {
                hotspot: true,
            }
        },
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 90,
            }
        },
        {
            name: 'topic',
            title: 'Topic',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'user' }],
              },
            ],
          },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]    
}