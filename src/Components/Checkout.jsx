import Modal from "./UI/Modal";
import ShoesCartContex from "../Store/ShoesCartContext.jsx";
import ShoesCartProviderContex from "../Store/CartShoesProvider.jsx";
import Input from "./UI/Input.jsx";
import ModalDone from "./UI/ModalDone.jsx";
import React from "react";
import Error from "./UI/Error.jsx";

export default function Checkout(){
    const [isFetching, setIsFetching] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false)
   const [error, setError] = React.useState()
  

    

    const ctxCartShoes = React.useContext(ShoesCartProviderContex)
    const ctxContex = React.useContext(ShoesCartContex)

    const shoesTotal = ctxContex.items.reduce((totalCheckout, item) =>  
    totalCheckout + item.quantity * parseInt(item.price.split(",").join("")), 0)
        
    console.log(shoesTotal)


    

    function handleCloseModal(){
        ctxCartShoes.hideCheckout()
    }

    function handleCLearShoes(){
        ctxCartShoes.hideCheckout()
        ctxContex.clearShoes()
        setIsFetching()
    }

 
    
        async function handleSubmit(e){
            e.preventDefault()
            const fd = new FormData(e.target);
            const customData = Object.fromEntries(fd.entries())
                setIsLoading(true)
                try{
                    
                    const fetchingData = await fetch('http://localhost:3000/orders', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            order:{
                                items: ctxContex.items,
                                customer: customData
                            }
                        })
                    })
                    setIsFetching(fetchingData)
                }catch(err){
                    setError(err.message || 'Something went Wrong')
                }
                setIsLoading(false) 
           
        }
    
     
   
   
    let actions = <>
          
        <button
            type="button" 
            onClick={handleCloseModal} 
            className=" bg-neutral-500 p-1  font-medium  hover:text-neutral-400" >
            Close
        </button>

        <button  className = "bg-neutral-600  rounded-md h-9 font-medium px-2 hover:text-neutral-400 hover:bg-stone-600 ">
            Submit Order
         </button>   
    </>
    if(isLoading){
        actions = <h2 className=" text-center font-semibold">Sending other data..</h2>
    }

    if(isFetching && !error  ){
        return <ModalDone onCLose={handleCLearShoes} onClick={handleCLearShoes}/>
    }

    
    
        
        return(
            <Modal open={ctxCartShoes.progress === 'checkout' } onCLose={handleCloseModal}>
               <form onSubmit={handleSubmit} className=" p-2 font-medium">
                    <h2 className="  my-2 text-2xl">Checkout</h2>
                    <p className=" font-normal pb-4">Total Amount: {shoesTotal}</p>

                    <Input label= "Full Name:" id="name" type ="text"  />
                    <Input label= "Email Adress:" type = "email" id= "email"/>
                    <Input label= "Street" type = "text" id= "street"/>

                    <div className=" flex gap-4 mb-3">
                        <Input label= "Postal Code" type = "text" id= "postal-code" />
                        <Input label= "City" type = "text" id= "city" />
                    </div>
                        {error && <Error title= "Failed to submit order" message={error} />}
                    <div className=" gap-3 flex" >
                        {actions}
                    </div>    
                </form>     
            </Modal>
        )

}