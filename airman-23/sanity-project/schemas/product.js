export default {
    name: "product",
    title: "Product",
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
            name: 'size',
            title: 'Size',
            type: 'array',
            of: [{type: 'number'}],
            options: {
                list: [
                    {
                    value: 37,
                    value: 38,
                    value: 39,
                    value: 41,
                    value: 42,
                    value: 43,
                    value: 43,
                    value: 45,
                    }
                ]
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
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]    
}