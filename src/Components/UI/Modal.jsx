import React from "react";
import { createPortal } from "react-dom";



export default function Modal({children, open, onCLose}){
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
        <dialog ref={openModal}
            onClose={onCLose}     
            className=" border-solid p-2 bg-neutral-500 w-[32%] h-[38%] rounded-lg backdrop:bg-stone-900/90"
         >
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}
