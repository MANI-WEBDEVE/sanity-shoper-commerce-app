"use client";
import React from "react";
import { ProductCartType } from "../../types/cartProductsType";
import { BiTrash } from "react-icons/bi";
import useCartStore from "@/store/cartStore";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { createOrder } from "@/sanity/lib/client";

const Cart = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalItems = useCartStore((state) => state.totalItems);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const [loading, setLoading] = React.useState(false);
  const { user, isSignedIn, isLoaded } = useUser();
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentSubmit = async (e: any) => {
    const cardElement = elements?.getElement("card");
    e.preventDefault();
    setLoading(true);
    try {
      if (!stripe && !elements) {
        return;
      }
      const data = await axios.post("/api/stripe", {
        data: {
          amount: cartTotal.toFixed(0),
        },
      });

      const response = await stripe?.confirmCardPayment(
        data.data.paymentIntent,
        {
          payment_method: {
            card: cardElement as any,
          },
        }
      );
      const status = response?.paymentIntent?.status;
      if (status === "succeeded") {
        setLoading(false);
        const email = user?.emailAddresses[0]?.emailAddress;
        if (email) {
          const res = await createOrder(email, cart);
          if (res) {
            router.push("/order");
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
            {cart?.map((product: any) => (
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
                  <BiTrash
                    onClick={() => removeFromCart(product._id)}
                    className="text-center text-lg ml-4 text-red-500"
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end w-1/2 mx-auto">
        <p className="font-medium text-white text-lg">Total: ${cartTotal}</p>
      </div>
      <div className=" mt-5 p-4 w-full flex justify-center bg-neutral-700/20 rounded">
        {cartTotal > 0 && (
          <CardElement className="w-full text-white bg-white/90 rounded placeholder:text-white text-white/20  border-[1px] border-white  px-4 py-2" />
        )}
      </div>

      <div className="flex flex-col mt-10 gap-3  items-center">
        {cartTotal > 0 && (
          <button
            onClick={handlePaymentSubmit}
            className="bg-yellow-700 px-6 py-3 text-lg font-bold text-white  rounded-lg"
          >
            {loading ? "Processing..." : "CheckOut Now"}
          </button>
        )}
        <button className="bg-yellow-700 px-6 py-3 text-lg font-bold text-white rounded-lg">
          Back to Shopping
        </button>
      </div>
    </>
  );
};

export default Cart;
