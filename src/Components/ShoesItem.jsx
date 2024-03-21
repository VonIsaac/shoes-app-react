import ShoesContex from "../Store/ShoesCartContext.jsx";
import React from "react";

export default function ShoesItem({shoes}){
    const cssClases = 'text-gray-300 bg-neutral-500 py-2 px-1 rounded my-3 w-20 font-bold text-sm transition ease-out delay-150 hover:bg-stone-500  duration-300 ... ';
    const cssClasesLi = " border-solid py-4 mt-9 px-4 bg-stone-700 w-4/5 rounded-xl shadow-md  ";

    const ctxShoesContex = React.useContext(ShoesContex);

    function handleAddShoes(){
        ctxShoesContex.addItem(shoes)
    }


    return(
      
       <li className=" flex items-center justify-center">
        <article className= {cssClasesLi}>
      
                <div className="">
                    <img src={`http://localhost:3000/${shoes.image}`} alt={shoes.name} className=" w-[100%]  mx-auto rounded-lg  object-cover cursor-pointer"/>
                </div>
                <div className=" flex flex-col justify-center items-center my-3">
                    <h3 className=" text-neutral-400 text-3xl font-semibold">{shoes.name}</h3>
                    <p className=" text-neutral-400 text-xl font-medium">₱{shoes.price}</p>
                    <p className=" text-neutral-400 font-medium text-center" >{shoes.description}</p>
                    <button className={cssClases} onClick={handleAddShoes}>ADD CART</button>  
                </div>
        </article>
       </li>
    )   
}