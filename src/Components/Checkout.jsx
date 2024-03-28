import Modal from "./UI/Modal";
import ShoesCartContex from "../Store/ShoesCartContext.jsx";
import ShoesCartProviderContex from "../Store/CartShoesProvider.jsx";
import Input from "./UI/Input.jsx";
import React from "react";
export default function Checkout(){
    const ctxCartShoes = React.useContext(ShoesCartProviderContex)
    const ctxContex = React.useContext(ShoesCartContex)

    const shoesTotal = ctxContex.items.reduce((totalCheckout, item) => totalCheckout + item.quantity * item.price, 0)

    function handleCloseModal(){
        ctxCartShoes.hideCheckout()
    }


    function handleSubmit(e){
        e.preventDeafault()
        const fd = new FormData(e.target);
        const customData = Object.fromEntries(fd.entries())
    }


    const cssClases = "bg-neutral-600  rounded-md h-9 font-medium px-2 hover:text-neutral-400 hover:bg-stone-600 ";
        
        return(
            <Modal open={ctxCartShoes.progress === 'checkout' } onCLose={handleCloseModal}>
               <form onSubmit={handleSubmit} className=" p-2 font-medium">
                    <h2 className="  my-2 text-2xl">Checkout</h2>
                    <p className=" font-normal pb-4">Total Amount: {shoesTotal}</p>

                    <Input label= "Full Name:" id="full-name" type ="text"  />
                    <Input label= "Email Adress:" type = "email" id= "email"/>
                    <Input label= "Street" type = "text" id= "street"/>

                    <div className=" flex gap-4 mb-3">
                        <Input label= "Postal Code" type = "text" id= "posta-code" />
                        <Input label= "City" type = "text" id= "city" />
                    </div>

                    <div className=" gap-3 flex" >
                        <button onClick={handleCloseModal} className=" bg-neutral-500 p-1  font-medium  hover:text-neutral-400" >Close</button>
                        <button className = {cssClases}>Submit Order</button>
                    </div>
                </form>     
            </Modal>
        )

}