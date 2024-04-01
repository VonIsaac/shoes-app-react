
import Modal from "./Modal.jsx";
import ShoesCartProviderContex from "../../Store/CartShoesProvider.jsx";
import { useContext } from "react";
export default function ModalDone({onClick, onCLose}){
    const ctxContex = useContext(ShoesCartProviderContex);
    const cssClases = " bg-neutral-600 p-1 w-16 rounded font-medium uppercase hover:bg-stone-600 hover:text-neutral-400"

       return <Modal open={ctxContex.progress  === 'checkout' }  onCLose={onCLose}>
                <h2 className=" text-center text-2xl py-5 font-semibold uppercase font-sans">Succes</h2>
                <p className=" pl-2 py-2 text-lg font-semibold text-neutral-900">Your order was submitted succestfully</p>
                <p className=" pl-2 font-semibold text-lg text-neutral-900 pb-2">Wee will get you back to you with more details via email within the next few minutes.</p>

                <div className=" flex justify-center items-center">
                    <button onClick={onClick} className={cssClases}>Okay</button>
                </div>
            </Modal>
}