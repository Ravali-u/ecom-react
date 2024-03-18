import React, { useContext, useSate} from "react";
import { AppContext } from "../../context/appContext.js"
import products from "./products.json";
import "./Products.css";
import AddButton from "./AddButton.js";
import ShowProduct from './ShowProduct.js';
import { Link } from "react-router-dom";
export default function Products() {
  const{ cartItems, setCartItems } = useContext(AppContext)
  const PATH = process.env.REACT_APP_PATH;
  const{selectedProduct, setSelectedProduct}= useContext(AppContext);
  const handleClick = ((value)=>{setSelectedProduct(value)});
  return (
    <div className="Product-container">
      {products &&
        products.map((value) => (
          <div key={value.id} 
          className="Product-items">
            <Link to={`${PATH}/product`}>
            <div>
              <img
               className="Product-img"
                src={`${PATH}${value.image}`}
                alt={value.name}
                onClick ={()=> handleClick(value)}
              />
            </div>
            </Link>
            <h3>{value.name}</h3>
            <p style={{ textAlign: "justify", padding: "10px" }}>
              {value.desc}
            </p>
            <div className="priceBtn">
              <div className="priceTxt">₹{value.price}</div>
              <div className="Product-button">
                <AddButton id={value.id} />
               </div>
               </div>
          </div>
        ))}
    </div>
  );
}
