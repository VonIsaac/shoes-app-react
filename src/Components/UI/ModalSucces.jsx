
import React from "react";
import { createPortal } from "react-dom";
const ModalSucces = React.forwardRef( function ModalSucces( ref){
    const openModalSucces = React.useRef();

    React.useImperativeHandle(ref, () => {
        return{
            open(){
                openModalSucces.current.showModal()
            }
        }
    })
 
    return createPortal(
        <dialog ref={openModalSucces}>
            <h2>Succes</h2>
            <p>Your order was submitted succestfully</p>
            <p>Wee will get you back to you with more details via email within the next few minutes.</p>

            <div>
                <button>Okay</button>
            </div>
        </dialog>,
        document.getElementById('modal-succes')
    )
})

export default ModalSucces