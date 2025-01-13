import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});



export async function getProductBySlug(slug:any){
  return client.fetch(groq`*[_type == "product" && slug.current == $slug]{
       _id,
    name,
    price,
    "slug":slug.current,
    "image":image.asset -> url,
    "extraImages":images[].asset -> url,
    color,
    description,
    "CreatedAt":createdAt
    
    }`, {slug})
}

export async function getProducts() {
  return client.fetch(groq`*[_type == "product"]{
    _id,
    name,
    price,
    "slug":slug.current,
    "image":image.asset -> url,
    "extraImages":images[].asset -> url,
    color,
    description,
    "CreatedAt":createdAt
    }`);
}
