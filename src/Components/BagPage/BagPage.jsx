import { useContext, useEffect, useState } from "react";
import UtilityBar from "../UtilityBar/UtilityBar";
import { BagContext } from "../../context/BagContext";
import { assets } from "../../assets/assets";

const BagPage = () => {
  const { bagItems ,removeFromBag ,clearBag } = useContext(BagContext);
  const [total,setTotal] = useState(0);
  useEffect(() => {
    setTotal (bagItems.reduce((sum,item) => sum + parseInt(item.price.slice(1)*item.quantity,10),0))
  },[bagItems])
  return (
    <>
      <UtilityBar param={"Bag"}></UtilityBar>
      
      <div className="pb-16 md:pb-0">

        {/* For Bigger Screens */}

        <ul className="hidden md:grid grid-cols-7 py-2 px-1 text-sm text-(--secondary-text-color) place-items-center border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color) ">
          <li className="p-4"></li>
          <li className="p-4">Product</li>
          <li className="p-4">Size</li>
          <li className="p-4">Price</li>
          <li className="p-4">Quantity</li>
          <li className="p-4">SubTotal</li>
          <li onClick={clearBag} className="py-4 text-center text-black  text-[15px] w-full h-full bg-(--secondary-color)  flex justify-center gap-2 items-center cursor-pointer dark:text-white  dark:bg-(--dark-secondary-color)">Clear Bag <img src={assets.emptybag} className="h-4 dark:invert" alt="" />
   </li>
        </ul>
        <div className="hidden md:flex flex-col">
        {bagItems.map((item, index) => (
          <ul key={index} className="px-2 dark:text-white grid grid-cols-7 place-items-center border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color) ">
            <li className="grid place-content-center py-3">
              <img src={item.image} alt="" className="h-40 w-40 object-contain bg-[#e3dede6b] dark:bg-[#e3dede0a] " />
            </li>
            <li className="p-4">{item.name}</li>
            <li className="p-4">{item.size.toUpperCase()}</li>
            <li className="p-4 secondary-font text-[13px]">{item.price}</li>
            <li className="p-4 secondary-font text-xs">
            {item.quantity}
            </li>
            <li className="p-4 secondary-font text-[13px]"> ${parseInt(item.price.slice(1))*item.quantity}</li>
            <li onClick={ () => {
                removeFromBag(index)}} className="p-2 rounded-full hover:bg-[#e3dede6b] dark:hover:bg-[#e3dede0a] cursor-pointer">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                color="#91a191"
                fill="none"
              >
                <path
                  d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </ul>
        ))}
        </div>

        {/* For Smaller Screens */}


        <div className="flex md:hidden flex-col">
        {bagItems.map((item, index) => (
          <div key={index} className="relative flex border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color) px-4 py-6">
            <img src={item.image} alt="" className="h-40 w-40 object-contain bg-[#e3dede6b] dark:bg-[#e3dede0a] " />
            <div className="flex items-center pl-4 gap-4">
            <ul className="text-xs text-(--secondary-text-color) flex flex-col gap-2">
              <li>Product:</li>
              <li>Size:</li>
              <li>Price:</li>
              <li>Quantity:</li>
              <li>Subtotal:</li>
            </ul>
            <ul className=" dark:text-white text-xs flex flex-col gap-2">
              <li className="">{item.name}</li>
            <li className="">{item.size.toUpperCase()}</li>
            <li className=" secondary-font ">{item.price}</li>
            <li className=" secondary-font ">
            {item.quantity}
            </li>
            <li className=" secondary-font text-[13px]"> ${parseInt(item.price.slice(1))*item.quantity}</li>
            </ul>
            </div>
            <div onClick={ () => {
                removeFromBag(index)}} className="absolute top-2 right-2 p-2 rounded-full hover:bg-[#e3dede6b] dark:hover:bg-[#e3dede0a] cursor-pointer">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                color="#91a191"
                fill="none"
              >
                <path
                  d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
        </div>


        <div className="fixed bottom-0 md:static grid md:flex justify-end grid-cols-2 w-full">
            <div className="secondary-font font-semibold px-10 dark:text-white flex items-center justify-center bg-(--primary-color) dark:bg-(--dark-primary-color)">${total}.00</div>
            <button className=" flex items-center justify-center bg-(--dark-color) font-semibold text-white text-sm dark:bg-white dark:text-black py-5 px-15 ">Checkout</button>
        </div>

      </div>
    </>
  );
};

export default BagPage;
