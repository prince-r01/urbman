import { useNavigate } from 'react-router-dom';

const UtilityBar = ({param,sort}) => {
  const navigate = useNavigate();
  return (

     <div className="sticky top-[1px] h-16 z-10 px-5 grid grid-cols-2 md:grid-cols-3 place-items-center justify-items-center bg-(--secondary-color) border-b-[1.5px] border-(--border-color) text-(--secondary-text-color) dark:bg-(--dark-secondary-color)  dark:border-(--dark-border-color) ">
            <button
              className="relative right-8 cursor-pointer text-start hover:text-black dark:hover:text-white transition-colors duration-400"
              onClick={() => {
                navigate(-1);
              }}
            >
              ← Back
            </button>
            <h1 className="text-center text-black dark:text-(--dark-s-text-color)">
              {param}
            </h1>
            <p className='hidden md:flex'>{sort ? sort: ''}</p>
          </div>
  )
}

export default UtilityBar
