import Modal from "./UI/Modal.jsx"
import React from "react"
import ShoesCartContex from "../Store/ShoesCartContext.jsx";
import ShoesCartProviderContex from "../Store/CartShoesProvider.jsx";
import CartItem from "./CartItem.jsx";
export default function Cart(){
     const cxtContexTotal = React.useContext(ShoesCartContex)
     const cxtCartProgres = React.useContext(ShoesCartProviderContex)
     const totalCart = cxtContexTotal.items.reduce((totalPrice, item) =>
      totalPrice + item.quantity * item.price, 0
      );

    return(
        <Modal open={cxtCartProgres.progress === 'cart'}>
            
            <ul>
                {cxtContexTotal.items.map((item) => (
                    <CartItem 
                        key={item.id}
                        name={item.name}
                        qauntity={item.qauntity}
                        price={item.price}

                    />
                ))}
            </ul>

            <p>{totalCart}</p>
            <button className=" bg-neutral-600 p-1">Close</button>
            <button className=" bg-neutral-600 p-1">GO TO CHECK OUT</button>

        </Modal>
    )
}