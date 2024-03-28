import Shoes from '../assets/nike.jpg'
import ShoesContex from '../Store/ShoesCartContext.jsx';
import React from 'react';
import ShoesCartProviderContex from '../Store/CartShoesProvider.jsx';
export default function Header(){

  const ctxShoesContex = React.useContext(ShoesContex);

  const totalAddShoes = ctxShoesContex.items.reduce((totalItem, item) =>{
    return totalItem + item.quantity
  },0);
  

  const ctxCart = React.useContext(ShoesCartProviderContex)

    function handleShoesCart(){
      ctxCart.showCart()
    }


    return(
        <header className=' flex '>

          <div className=' ml-8 my-12 flex'>
            <img src= {Shoes} alt="Logo" className=' w-[15%] border rounded-full border-none' />
            <h1  className=' text-4xl font-medium text-neutral-500 ml-4 mt-6'>Step in Style</h1>
          </div>

        
          <div className=' ml-auto mr-10 my-[70px] '>  
             <button className=' text-gray-500 font-medium text-3xl' onClick={handleShoesCart}>Cart({totalAddShoes})</button>
            </div>
        </header>
    )
}