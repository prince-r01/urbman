import { useEffect, useState } from 'react'
import UtilityBar from '../UtilityBar/UtilityBar'
import { assets, catalogData } from '../../assets/assets'
import Product from '../Product/Product'

const SearchPage = () => {
  const [searchArr,setSearchArr] = useState([])
  let arr = [];
  const[input,setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  }

  useEffect(() => {
  arr = []
   input.trimEnd().length > 0 ? catalogData.map((elem) => {
      elem.models.map((item) => 
        { if(item.name.toLowerCase().startsWith(input.toLowerCase())) {
            let categoryName = elem.categoryName
            arr.push({categoryName,...item})
      } })
    }) : ''
    setSearchArr(arr)
  },[input])


  return (
    <>
    
      <UtilityBar param={"Search"}/>

      <div>
        <div className='flex justify-center items-center border-b-[1.5px] border-(--border-color) dark:border-(--dark-border-color) h-20'>
          <div className=' flex justify-between border-[1.5px] border-(--border-color) dark:border-(--dark-border-color) dark:text-white h-14 w-3/5 md:w-1/2'>
          <input value={input} onChange= {handleInput} className='px-4 text-md w-4/5 outline-none focus:outline-0 ' type="text" placeholder='Search here ..' id='input' />
        <button className='grid place-content-center w-1/6'><svg
            className="text-(--text-color) text-2xl h-3 "
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
          </button>
          </div>
        </div>
        {searchArr.length > 0 ? <div className={`grid grid-cols-1 md:grid-cols-${searchArr.length < 4 ? searchArr.length : 3}`}>
        {searchArr.map((item,index) => (
         <Product item={item} index={index} key={index} category={item.categoryName}/> ))
        }</div>:<div className='h-96 opacity-35 w-full gap-6 flex flex-col justify-center items-center dark:invert' ><img src={assets.empty_box} className='h-30' alt="" /> <p className='text-xl'> Nothing Here</p></div>}
      </div>
    </>
  )
}

export default SearchPage
