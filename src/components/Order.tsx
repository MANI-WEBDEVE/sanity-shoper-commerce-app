'use client'
import React from "react";
import { OrderProductType } from "../../types/orderProductType";
import { getOrdersByEmail } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";
const Order =  () => {
  const {user} = useUser()
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    const getOrderData = async () => {
      const products = await getOrdersByEmail(user?.emailAddresses[0].emailAddress);
      setProduct(products);
      console.log(products);
    }
    getOrderData();
  }, [user?.emailAddresses[0].emailAddress]);
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-yellow-600">Your Order</span> Page
        </h2>
      </div>
      <div className="overflow-x-auto flex items-center justify-center mt-10 ">
        <table className="table flex items-center justify-center w-1/2 ">
          {/* head */}
          <thead>
            <tr className="border-b-[1px] border-yellow-600 text-white">
              <th>Product</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product:any, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-light text-xs truncate">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-semibold ml-5">{product.qty}</p>
                </td>
                <td>
                  <p className="font-semibold ">${product.price}</p>
                </td>
                <th>
                  <p
                    className={`${
                      product.paid 
                        ? "text-green-600"
                        : "text-red-600"
                    } text-medium ml-5`}
                  >
                    {product.paid  ? "Paid": "no Paid"}
                  </p>
                </th>
                <th>
                  <p
                    className={`${
                      product.delivered 
                        ? "text-green-600"
                        : "text-red-600"
                    } ml-5`}
                  >
                    {product.delivered ? "delivered": "In Transit"}
                  </p>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
// color
// : 
// "Blue"
// createdAt
// : 
// "2025-01-13T18:54:07.488Z"
// delivered
// : 
// false
// email
// : 
// "nudmaufon@gmail.com"
// name
// : 
// "Step Up Your Game with Air Jordan Shoes"
// paid
// : 
// true
// price
// : 
// 2000
// qty
// : 
// 2