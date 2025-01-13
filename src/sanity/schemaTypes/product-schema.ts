import { validation } from "sanity";

const products = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "images",
      title: "Extra Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
        name:"color",
        title:"Colors",
        type:"array",
        of: [
            {
                type:"string",
                options:{
                    list:["Black", "Brown", "Green", "Blue", "Red", "Yellow", "white"]
                }
            }
        ]
    },

    {
        name:"description",
        title:"Description",
        type:"text",
        validation:(Rule:any) => Rule.required()
    },
    {
        name:"price",
        title:"Price",
        type:"number",
        validation:(Rule:any) => Rule.required().min(0)
    },
    {
        name:"createdAt",
        title:"Created At",
        type:"datetime",
        options:{
            dateFormat:"YYYY-MM-DDTHH:mm:ssZ"
        },
        readonly:true
    }

  ],
  initialValue:{
    createdAt: new Date().toISOString()
  }
};
export default products;
