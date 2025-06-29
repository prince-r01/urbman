import { createContext, useState } from "react";

export const BagContext = createContext();

export const BagContextProvider = (props) => {
  const [bagItems, setBagItems] = useState([]);

  const addToBag = (product,size) => {
    setBagItems((prevItems) => {
      const exists = prevItems.find(item =>  item.name === product.name &&  size === item?.size 
       )
      if(exists) {
        return prevItems.map(item => item.name === product.name && size == item.size ? {...item,quantity:item.quantity + 1 }:item)
      }else {
      return[{...product,size:size,quantity:1},...prevItems];
      }
    })
  }
  const removeFromBag = (index) => { 
    setBagItems((prevItems) => prevItems.filter((item,i) => i !== index ));
  }

  const clearBag = () => {
    bagItems.length > 0 && setBagItems([]);
  }
  const contextValue = {
    bagItems,
    addToBag,
    removeFromBag,
    clearBag
  };
  return (
    <BagContext.Provider value={contextValue}>
      {props.children}
    </BagContext.Provider>
  );
};

export default BagContextProvider;
