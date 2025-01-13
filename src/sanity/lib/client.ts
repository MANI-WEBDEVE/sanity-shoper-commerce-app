import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
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

export async function getOrdersByEmail(email:any) {
  try {
    // Query orders from Sanity with a GROQ query
    const orders = await client.fetch(
      `*[_type == 'order' && email == $email] | order(createdAt desc)`,
      { email },
      {next: {
        revalidate: 1, //revalidate every 30 days
     }});

    // Return the sorted orders
    return orders;
  } catch (error:any) {
    // Handle errors appropriately
    console.error('Error getting orders:', error.message);
    throw new Error('Failed to get orders');
  }
}

export async function createOrder(email:any ,cart:any) {
  console.log(email,cart);
  try {
    // Create an array to store the promises for creating each order
    const orderCreationPromises:any[] = [];

    // Iterate over the orderDataArray and create a promise for each order
    cart.forEach((orderData:any) => {
      // Extract order data
      const { name, quantity, price,color} = orderData;

      // Create a promise for creating each order
      const orderCreationPromise = client.create({
        _type: 'order',
        name,
        qty: quantity,
        price,
        color,
        paid: true,
        delivered: false,
        email: email,
        createdAt: new Date().toISOString(),
      });

      // Add the promise to the array
      orderCreationPromises.push(orderCreationPromise);
    });

    // Wait for all order creation promises to resolve
    const createdOrders = await Promise.all(orderCreationPromises);

    // Return the created orders
    return createdOrders;
  } catch (error:any) {
    // Handle errors appropriately
    console.error('Error creating order:', error.message);
    throw new Error('Failed to create order');
  }
} 