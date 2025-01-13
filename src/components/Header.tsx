'use client'
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import useCartStore from "@/store/cartStore";
import Link from "next/link";
 function Header() {
  const totalItem = useCartStore((state) => state.totalItems)
  return (
    <div className="px-4 py-3 border-b-[1px] border-yellow-600/10 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={"/icon.png"}
            alt="logo"
            width={35}
            height={35}
            className="mr-2 "
          />
          <h1 className="uppercase text-2xl font-bold ">
            <span className="text-yellow-600">Shopers</span>.co
          </h1>
        </div>
        
          <>
            <div className="flex items-center gap-4 relative">
              <Link href={"/cart"}>
              <MdShoppingCart className="text-3xl cursor-pointer text-yellow-600 transition-transform duration-300 hover:scale-125" />
              <div className="ml- text-white absolute -top-2 left-3  text-xs font-medium h-5 w-5 rounded-full bg-yellow-600 text-center">
                {totalItem}
              </div>
              </Link>

              <TbTruckDelivery className="text-3xl cursor-pointer text-yellow-600 transition-transform duration-300 hover:scale-125" />
              <div className="ml- text-white absolute -top-2 right-[2.4rem]  text-xs font-medium h-5 w-5 rounded-full bg-yellow-600 text-center">
                2
              </div>

              <UserButton afterSignOutUrl="/" />
            </div>
          </>
        
      </div>
    </div>
  );
}

export default Header;
