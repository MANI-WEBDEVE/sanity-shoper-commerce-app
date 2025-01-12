import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
function Header() {
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

        <div className="flex items-center gap-4 relative">
          <MdShoppingCart className="text-3xl cursor-pointer text-yellow-600 transition-transform duration-300 hover:scale-125" />
          <div className="ml- text-white absolute -top-2 left-3  text-xs font-medium h-5 w-5 rounded-full bg-yellow-600 text-center">
            2
          </div>

          <TbTruckDelivery className="text-3xl cursor-pointer text-yellow-600 transition-transform duration-300 hover:scale-125" />
          <div className="ml- text-white absolute -top-2 -right-2  text-xs font-medium h-5 w-5 rounded-full bg-yellow-600 text-center">
            2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
