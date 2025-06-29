import { clsx } from 'clsx'
import { catalogData, clothes_data } from '../../assets/assets'
import { Link } from 'react-router-dom'
const HomePage = () => {

  const colSpans = [3,2,1,1,2,2,1]
  return (
    <> 
    <div className="w-full border-b-[1.5px] border-(--border-color) flex justify-center flex-col md:text-3xl text-2xl font-extrabold p-8 dark:border-(--dark-border-color) dark:text-white">
            <span>FOR ⟶</span>
            <span>EVERYONE BUT NOT ANYONE</span>
      </div>
    <div className='grid grid-cols-3 gap-0'>
         {/* For bigger screens */}
      {clothes_data.map((item,index) => {
        const span = colSpans[index];

        return <Link to={`/urbman/${item.categoryName}`} key={index} className={clsx(` ${(index+1) % 2 == 0 ? 'border-r-[1.5px]' : '' } hidden md:flex justify-around border-b-[1.5px] border-(--border-color) hover:bg-(--secondary-color)  group  hover:transition-colors hover:duration-200 dark:border-(--dark-border-color) text-(--secondary-text-color) dark:text-(--dark-s-text-color) dark:hover:bg-(--dark-secondary-color)`,{
          'col-span-1': span === 1,
          'col-span-2': span === 2,
          'col-span-3': span === 3,
        })}>
            <div className='pl-6 py-6 flex flex-col justify-end items-center gap-4 w-1/3'>
              <h4 className='text-sm text-center font-medium secondary-font text-(--secondary-text-color) '>{catalogData.map((elem) => {
                if(item.categoryName === elem.categoryName)
                return elem.models.length + "  " + "models" ;
              })}</h4>
              <h2 className='flex items-end font-bold text-xl group-hover:text-2xl text-center  transition-all duration-300 '>{item.categoryName}</h2>
            </div>
            <img src={item.coverImg} loading='lazy' alt="" className='h-60 '/>
        </Link>
      })}
      {/* For Smaller Screens */}
      
      {clothes_data.map((item,index) => {
        return <Link to={`/urbman/${item.categoryName}`} key={index} className="col-span-3 flex md:hidden justify-around border-b-[1.5px] border-(--border-color) hover:bg-(--secondary-color)  group  hover:transition-colors hover:duration-200 dark:border-(--dark-border-color) text-(--secondary-text-color) dark:text-(--dark-s-text-color) dark:hover:bg-(--dark-secondary-color)">
            <div className='pl-6 py-6 flex flex-col justify-end items-center gap-4 w-1/3'>
              <h4 className='text-sm text-center font-medium secondary-font text-(--secondary-text-color) '>{catalogData.map((elem) => {
                if(item.categoryName === elem.categoryName)
                return elem.models.length + "  " + "models" ;
              })}</h4>
              <h2 className='flex items-end font-bold text-xl group-hover:text-2xl text-center  transition-all duration-300 '>{item.categoryName}</h2>
            </div>
            <img src={item.coverImg} loading='lazy' alt="" className='h-60 '/>
        </Link>
      })}
    </div>
    </>
  )
}

export default HomePage
