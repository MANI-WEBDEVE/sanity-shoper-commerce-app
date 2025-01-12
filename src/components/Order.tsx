import React from "react";
import { OrderProductType } from "../../types/orderProductType";

const Order = () => {
  const cartProductData: OrderProductType[] = [
    {
      id: 1,
      name: "Shoes",
      price: 30,
      quantity: 2,
      deliveryStatus: "transit",
      paymentStatus: "paid",
    },
    {
      id: 2,
      name: "Shoes",
      price: 30,
      quantity: 1,
      deliveryStatus: "delivered",
      paymentStatus: "paid",
    },
  ];

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
            {cartProductData.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-semibold ml-5">{product.quantity}</p>
                </td>
                <td>
                  <p className="font-semibold ">${product.price}</p>
                </td>
                <th>
                  <p
                    className={`${
                      product.paymentStatus === "paid"
                        ? "text-green-600"
                        : "text-red-600"
                    } text-medium ml-5`}
                  >
                    {product.paymentStatus}
                  </p>
                </th>
                <th>
                  <p
                    className={`${
                      product.deliveryStatus === "delivered"
                        ? "text-green-600"
                        : "text-red-600"
                    } ml-5`}
                  >
                    {product.deliveryStatus}
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
