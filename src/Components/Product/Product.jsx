import { Link } from 'react-router-dom'

const Product = ({item,index,category}) => {
  return (
    
    <Link to={`/urbman/${category}/${item.name}`} className={` ${(index+1) % 3 != 0 ? 'md:border-r-[1.5px]' : '' } p-4  flex flex-col justify-around border-b-[1.5px] border-(--border-color) group hover:bg-[#877a7a17] transition-colors  duration-300 cursor-pointer dark:border-(--dark-border-color)`}
            >
              <div className=' h-96 md:h-64 overflow-hidden flex justify-center '>
                <img src={item.image} loading="lazy" alt="" className=" h-90 p-2 md:p-0 w-80 md:h-60  object-cover md:object-contain group-hover:scale-105 transition-all duration-300" />
              </div>
               <div className=" flex flex-col gap-1 justify-end  ">
                <h1 className="text-lg md:text-[16px] transition-colors text-center duration-400 dark:text-(--dark-s-text-color) ">
                  {item.name.toUpperCase()}
                </h1>
                <p className="text-(--secondary-text-color) text-center secondary-font text-[12px]">
                  {item.price}
                </p>
              </div>
    </Link>
  )
}

export default Product
