import React from "react";
import { createPortal } from "react-dom";



export default function Modal({children, open}){
    const openModal = React.useRef();

    React.useEffect(() => {
        const openModals = openModal.current
        if(open){
            openModals.showModal()
        }else{
            openModals.close()
        }

    }, [open])

    return createPortal(
        <dialog ref={openModal} className=" border-solid p-2 bg-neutral-500 w-[20%] h-[30%] rounded-sm">
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}
