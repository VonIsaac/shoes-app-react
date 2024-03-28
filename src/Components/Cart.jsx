import Modal from "./UI/Modal.jsx"
import React from "react"
import ShoesCartContex from "../Store/ShoesCartContext.jsx";
import ShoesCartProviderContex from "../Store/CartShoesProvider.jsx";
import CartItem from "./CartItem.jsx";


export default function Cart(){
     const cxtContexTotal = React.useContext(ShoesCartContex)
     const cxtCartProgres = React.useContext(ShoesCartProviderContex);
     

   

    const totalCart = cxtContexTotal.items.reduce((totalPrice, item) =>  
     totalPrice * item.price + item.quantity, 0)

    console.log("Total Cart:", totalCart)


      function handleCloseModal(){
        cxtCartProgres.hideCart()
      }

      function handleOpenCheckOut(){
        cxtCartProgres.showCheckout()
      }

      let noOrders
      if(cxtContexTotal.items.length  === 0 ){
          noOrders = <p className=" text-center font-medium">NO ORDER. PLEASE SELECT ORDER</p>
      }
      
      const cssClases = 'bg-neutral-600 p-1 rounded-md h-10 font-medium px-2 hover:text-neutral-400 hover:bg-stone-600';
      const cssClasesClose = " bg-neutral-500 p-1 mr-4 font-medium text-lg hover:text-neutral-400";
      const csssClassCloseOnly = 'bg-neutral-500 p-1 mr-4 font-medium text-lg hover:text-neutral-400 mt-20'

    return(

          <Modal 
            open={cxtCartProgres.progress === 'cart'}
            onCLose={cxtCartProgres.progress === 'cart' ? handleCloseModal: undefined}
          >
            
            <h2 className=" text-xl font-semibold text-center mt-2">Your Cart</h2>
            <ul>
                {cxtContexTotal.items.map((item) => (
                    <CartItem 
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncress={() => cxtContexTotal.addItem(item)}
                        onDecress={() => cxtContexTotal.removeItem(item.id)}
                    />
                ))}
            </ul>
                
             <p className=" py-6 text-center text-lg font-medium">₱{totalCart}</p>   
                
                  {noOrders}

             <div className=" mx-4 mt-12">
                <button className={cxtContexTotal.items.length  === 0 ? csssClassCloseOnly: cssClasesClose } onClick={handleCloseModal} >Close</button>
                {cxtContexTotal.items.length > 0
                 && 
                 <button className= {cssClases} onClick={handleOpenCheckOut}>GO TO CHECK OUT</button>}
             </div>
            

        </Modal>
        
        
       
    )
}



