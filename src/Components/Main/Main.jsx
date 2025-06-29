import {useEffect,useRef} from 'react'
import { Route, Routes ,useLocation } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
import HomePage from '../HomePage/HomePage'
import CatalogPage from '../CatalogPage/CatalogPage'
import BagPage from '../BagPage/BagPage'
import SearchPage from '../SearchPage/SearchPage'
const Main = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if(containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  },[location.pathname]);
  return (
    <div ref={containerRef} className='overflow-x-hidden overflow-y-scroll mt-16'>
      <Routes>
        <Route path = '/urbman' element = {<HomePage/>}></Route>
        <Route path = '/urbman/:category' element = {<CatalogPage/>}></Route>
        <Route path = '/urbman/:category/:product' element = {<ProductPage/>}></Route>
        <Route path = '/urbman/bag' element = {<BagPage/>}></Route>
        <Route path = '/urbman/search' element = {<SearchPage/>}></Route>
      </Routes>
    </div>
  )
}

export default Main
