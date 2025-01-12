import React from "react";
import { ProductCartType } from "../../types/cartProductsType";
import { BiTrash } from "react-icons/bi";

const Cart = () => {
  const cartProductData: ProductCartType[] = [
    {
      id: 1,
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      name: "Shoes",
      price: 30,
      quantity: 2,
    },
    {
      id: 2,
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      name: "Shoes",
      price: 30,
      quantity: 1,
    },
  ];

  const total = cartProductData.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <h2 className="text-4xl font-bold text-white">
          <span className="text-yellow-600">Cart</span> Products
        </h2>
      </div>
      <div className="overflow-x-auto flex items-center justify-center mt-10 ">
        <table className="table flex items-center justify-center w-1/2 ">
          {/* head */}
          <thead>
            <tr className="border-b-[1px] border-yellow-600 text-white">
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartProductData.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-semibold text-center">
                    {product.quantity}
                  </p>
                </td>
                <td>
                  <p className="font-semibold text-center">${product.price}</p>
                </td>
                <th>
                  <BiTrash className="text-center text-lg ml-4 text-red-500" />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div className="flex justify-end w-1/2 mx-auto"><p className="font-medium text-white text-lg">Total: ${total}</p></div>
        <div className="flex flex-col mt-10 gap-3  items-center">
            <button className="bg-yellow-700 px-6 py-3 text-lg font-bold text-white  rounded-lg">Check Out Now</button>
            <button className="bg-yellow-700 px-6 py-3 text-lg font-bold text-white rounded-lg">Back to Shopping</button>
        </div>
    </>
  );
};

export default Cart;
