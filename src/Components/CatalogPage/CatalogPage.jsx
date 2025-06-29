import { catalogData } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import UtilityBar from "../UtilityBar/UtilityBar";

const CatalogPage = () => {
  const param = useParams();
  let element;
  return (
    <>
     <UtilityBar param= {param.category} sort = "Sort: Popular" />

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {catalogData.map((elem) => {
          if (param.category.toLowerCase() === elem.categoryName.toLowerCase()) {
            element = elem;
          }
        })}
        {element?.models.map((item, index) => {
          return  <Product item = { item } index = {index} key={index} category = {param.category}/>
        })}
      </div>
      
    </>
  );
};

export default CatalogPage;
