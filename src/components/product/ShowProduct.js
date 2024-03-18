import React, { useContext } from "react";
import AddButton from './AddButton';
import { AppContext } from '../../context/appContext';
const ShowProduct = ()=>{
    const { selectedProduct }= useContext(AppContext);
    const PATH = process.env.REACT_APP_PATH;


return(
    <div>
        {
            selectedProduct &&(
            <div className="Product-details">
                <h1>
                    {selectedProduct.name}</h1>
                    <img src={`$(PATH) $ {selectedProduct.imagr}`}
                    alt={selectedProduct.name}/>
                    <p>{selectedProduct.desc}</p>
                    <p>Price:{selectedProduct.price}</p>
                    <AddButton
                    id ={selectedProduct.id}/>
                    </div>)}
                    </div>
);
};
export default ShowProduct;

