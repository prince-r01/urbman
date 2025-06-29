import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { assets, catalogData } from "../../assets/assets";
import { useSwipeable } from "react-swipeable";
import { BagContext } from "../../context/BagContext";
import UtilityBar from "../UtilityBar/UtilityBar";

const ProductPage = () => {
  const { addToBag } = useContext(BagContext);

  const [addingToBag, setAddingToBag] = useState(false);

  const [size, setSize] = useState("s");
  const [isVisible, setIsVisible] = useState(false);
  const param = useParams();
  const element = catalogData.filter(
    (item) => item.categoryName == param.category
  )[0];
  const element2 = element.models.filter(
    (item) => item.name == param.product
  )[0];
  const product = element2.previews;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const [preview, setPreview] = useState(0);

  const prevSlide = () => {
    setPreview((prev) => (prev === 0 ? product.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setPreview((prev) => (prev === product.length - 1 ? 0 : prev + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleToBag = () => {
    addToBag(element2, size);
    setAddingToBag(true);
    setTimeout(() => setAddingToBag(false), 2300);
  };
  return (
    <>
      <UtilityBar param={param.product} />
      <div className=" flex flex-col md:flex-row">

        {/* Image album for bigger screens */}
        <div className=" hidden md:flex flex-col  border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color)">
          {product.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setPreview(index);
              }}
              className={`${
                product[preview] === item ? "bg-[#877a7a17]" : " "
              } p-1 border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color) cursor-pointer`}
            >
              <img
                loading="lazy"
                src={item}
                alt=""
                className={`transition-opacity duration-400 linear ${
                  isVisible ? "opacity-100" : "opacity-0"
                } h-44 w-36 object-contain `}
              />
            </div>
          ))}
        </div>

        <div className="md:border-r-[1.5px] md:w-fit w-full border-(--border-color) dark:border-(--dark-border-color)">
          <div
            {...swipeHandlers}
            className="py-5 px-10 md:px-20  w-full flex items-center justify-center border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color)"
          >
            <img
              src={product[preview]}
              alt=""
              draggable={false}
              className={`transition-opacity duration-1000 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              } w-96 h-96 md:h-80 md:w-80 object-cover `}
            />
          </div>

          {/* Image album for Smaller Screens */}
          <div className=" md:hidden flex border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color) flex-row ">
          {product.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setPreview(index);
              }}
              className={`${
                product[preview] === item ? "bg-[#877a7a17]" : " "
              } p-2 border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color) cursor-pointer`}
            >
              <img
                loading="lazy"
                src={item}
                alt=""
                className={`transition-opacity duration-400 linear ${
                  isVisible ? "opacity-100" : "opacity-0"
                } h-24 w-24 object-cover `}
              />
            </div>
          ))}
        </div>
          <div className="flex ">
            <ul className="cursor-pointer grid grid-cols-6 w-full h-16 border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color) dark:text-white ">
              <li
                onClick={() => setSize("s")}
                className={` ${
                  size == "s" ? "bg-[#86868263]" : ""
                } h-full  grid place-content-center border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color)`}
              >
                S
              </li>
              <li
                onClick={() => setSize("xs")}
                className={` ${
                  size == "xs" ? "bg-[#86868263]" : ""
                } h-full grid place-content-center border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color)`}
              >
                XS
              </li>
              <li
                onClick={() => setSize("m")}
                className={` ${
                  size == "m" ? "bg-[#86868263]" : ""
                } h-full grid place-content-center border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color)`}
              >
                M
              </li>
              <li
                onClick={() => setSize("l")}
                className={` ${
                  size == "l" ? "bg-[#86868263]" : ""
                } h-full grid place-content-center border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color)`}
              >
                L
              </li>
              <li
                onClick={() => setSize("xl")}
                className={` ${
                  size == "xl" ? "bg-[#86868263]" : ""
                } h-full grid place-content-center border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color)`}
              >
                XL
              </li>
              <li
                onClick={() => setSize("xxl")}
                className={` ${
                  size == "xxl" ? "bg-[#86868263]" : ""
                } h-full grid place-content-center`}
              >
                XXL
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color)">
            <span className="secondary-font py-5 grid place-content-center font-bold text-[16.5px] dark:text-white">
              {element2?.price + ".00"}{" "}
            </span>
            <button 
              disabled={addingToBag}
              onClick={handleToBag}
              className="disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center bg-(--dark-color) font-semibold text-white text-[13px] dark:bg-white dark:text-black py-5 "
            >
              {!addingToBag ? (
                <span>ADD TO CART</span>
              ) : (
               <img src={assets.checkmark} alt="" className="dark:invert" />
              )}
            </button>
          </div>

          {/* Info Section for smaller screens */}
           <div className="flex  h-fit md:hidden flex-col  gap-2 p-5 dark:border-(--dark-border-color)">
            <h1 className="font-bold text-2xl dark:text-white">
              {param.product}
            </h1>
            <h3 className="text-(--text-color)">({param.category})</h3>
            <p className="text-(--secondary-text-color)">
              Fashion That Fits You - Not a Box.
            </p>
            <div className="secondary-font text-xs flex items-center gap-1 p-2 border-1 border-(--border-color) dark:border-(--dark-border-color) w-32 text-(--text-color) ">
              <span className="font-semibold text-black dark:text-white">
                4.8
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="13"
                height="13"
                color="#766066"
                fill="#766066"
              >
                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              | 25 Ratings
            </div>
          </div>
          <div className="py-5 px-5 flex flex-col gap-2">
            <span className="flex gap-2 items-center pb-2">
              <h3 className="font-semibold text-sm dark:text-white">
                DELIVERY OPTIONS{" "}
              </h3>
              <img src={assets.truck} alt="" className="h-5 w-5 dark:invert" />
            </span>
            <div className="border-1 border-(--border-color) w-fit flex px-2  justify-between text-[13px] dark:border-(--dark-border-color) ">
              <input
                type="number"
                placeholder="Enter pincode"
                id="input"
                className=" focus:outline-0 secondary-font dark:placeholder-(--text-color)  p-2 "
              />
              <button className="text-(--red-color) outline-0 border-0 w-2/6 font-medium cursor-pointer">
                Check
              </button>
            </div>
            <p className="text-[11px] text-(--secondary-text-color)">
              Please enter PIN to check delivery time & Pay on Delivery
              Availability
            </p>
            <ul className="text-[13px] text-(--secondary-text-color)">
              <li>100% Original Products</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 7 days returns and exchanges</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col flex-1">

          {/* Info & Recommended Section for bigger screens */}

          <div className="hidden  h-full md:flex flex-col  gap-2 p-5 dark:border-(--dark-border-color)">
            <h1 className="font-bold text-2xl dark:text-white">
              {param.product}
            </h1>
            <h3 className="text-(--text-color)">({param.category})</h3>
            <p className="text-(--secondary-text-color)">
              Fashion That Fits You - Not a Box.
            </p>
            <div className="secondary-font text-xs flex items-center gap-1 p-2 border-1 border-(--border-color) dark:border-(--dark-border-color) w-32 text-(--text-color) ">
              <span className="font-semibold text-black dark:text-white">
                4.8
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="13"
                height="13"
                color="#766066"
                fill="#766066"
              >
                <path
                  d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              | 25 Ratings
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <h1 className="p-5 text-2xl font-bold text-center border-y-[1.5px] border-(--border-color) dark:border-(--dark-border-color) dark:text-white">
              Recommended
            </h1>
            <div className="flex  h-full items-center ">
              {element.models.slice(-1).map((item, index) => {
                if (item.name !== param.product) {
                  return (
                    <Link
                      to={`/urbman/${param.category}/${item.name}`}
                      className="flex flex-1/2 items-center justify-center px-4  w-full border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color)"
                      key={index}
                    >
                      <div>
                        <h2 className="font-medium text-sm dark:text-white">
                          {item.name}
                        </h2>
                        <p className="secondary-font text-sm text-(--secondary-text-color)">
                          {item.price}
                        </p>
                      </div>
                      <img src={item.image} alt="" className="h-60" />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
