import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation} from "react-router-dom";
import { BagContext } from "../../context/BagContext";

const Navbar = ({theme,setTheme}) => {
  const location = useLocation();
  const searchToggle = location.pathname.includes("search");
  const {bagItems} = useContext(BagContext);
  return (

    <nav className="fixed z-10 bg-(--primary-color) flex w-full justify-between border-b-[1.5px] border-(--border-color) dark:bg-(--dark-primary-color) dark:border-(--dark-border-color) transition-[border] duration-300 ">
      <div className="logo h-16 w-16 flex justify-center items-center  border-r-[1.5px] border-(--border-color) dark:border-(--dark-border-color)">
        <img src={assets.asterisk} alt="" className="h-4 w-4 dark:invert" />
      </div>

      <div className="grid grid-cols-[1fr_50px_30px] md:grid-cols-[1fr_120px_200px] w-[calc(100%-128px)] px-6 h-16">
        <h3 className="text-xl font-medium flex items-center gap-4 dark:text-white "><Link to={'/urbman'}>urbMan</Link>
            <button className="group h-8 w-8 grid place-content-center rounded-sm hover:bg-[#e9d3d8] border-none outline-none dark:hover:bg-[#262729]" onClick={() => {
                theme === 'light' ? setTheme('dark') : setTheme('light');
            }}><img src={`${theme === 'light'? assets.sun : assets.moon}`} alt="" className="group-hover:scale-[0.9] h-5 w-5 dark:invert cursor-pointer" /></button>
        </h3>
        
        <Link to={'/urbman/search'} className={`${searchToggle ? 'bg-(--secondary-color) dark:bg-(--dark-secondary-color)' : ''} text-(--text-color) hover:bg-(--secondary-color) hover:dark:bg-(--dark-secondary-color) text-sm flex items-center justify-center cursor-pointer `}>
          <svg
            className="text-(--text-color) h-3 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#fffff"
            fill="none"
          >
            <path
              d="M17 17L21 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="hidden md:flex">Search</p>
        </Link>

        <span className=" text-(--text-color)  text-sm flex items-center justify-center cursor-pointer ">
          <svg
            className="text-(--text-color) h-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="hidden md:flex">Log in / Registration</p>
        </span>

      </div>
      
      <Link to={'/urbman/bag'} className="cart h-16 w-16 flex items-center justify-center bg-(--dark-color) border-l-[1.5px] border-(--border-color) cursor-pointer active:bg-[#494949] dark:active:bg-[#dedede] dark:border-(--dark-border-color) dark:bg-[#ffff]">
        <div className="relative p-2"><img src={assets.cart} alt="" className="h-4 w-4 invert dark:invert-0" />
        {bagItems.length > 0 && <div className="absolute border border-(--dark-color) dark:border-white top-0.5 right-0 h-4 min-w-4  rounded-full bg-(--red-color) secondary-font text-[9px] grid place-content-center dark:text-white">{bagItems.length}</div>}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
