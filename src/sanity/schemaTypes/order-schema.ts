import { validation } from "sanity";

const order = {
    name:"order",
    title:"Orders",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
            validation: (Rule:any) => Rule.required()
        },
        {
            name:"email",
            title:"Email",
            type:"string",
            validation: (Rule:any) => Rule.required()
        },
        {
            name:"qty",
            title:"Quantity",
            type:"number",
            validation: (Rule:any) => Rule.required()
        },
        {
            name:'price',
            title:'Price',
            type:'number',
            validation: (Rule:any) => Rule.required()
        },
        {
            name:"color",
            title:"Color",
            type:"string",
            validation: (Rule:any) => Rule.required()
        },
        {
            name:'createdAt',
            title:'Created At',
            type:'datetime',
            options:{
                dateFormat: "YYYY:MM:DDTHH:mm:ss:Z"
            },
            readonly:true
        },
        {
            name:'paid',
            title:"Paid",
            type:'boolean',
            validation:(Rule:any) => Rule.required()            
        },
        {
            name:'delivered',
            title:"Delivered",
            type:'boolean',
            validation:(Rule:any) => Rule.required()
        }
    ],
    initialValue:{
        createdAt: new Date().toISOString()
    }
}
export default order;