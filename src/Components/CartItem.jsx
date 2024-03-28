export default function CartItem({name, quantity, price, onIncress, onDecress}){
    return(
        <li className=" border-b border-neutral-700">
            <p className=" text-lg font-medium text-stone-900 text-center mt-2">
                {name} - {quantity} + ₱{price}
            </p>

            <div className=" justify-center flex gap-4 mb-2">
                <button onClick={onDecress} className=" text-2xl font-bold">-</button>
                <p className=" text-lg font-semibold">{quantity}</p>
                <button onClick={onIncress} className=" text-2xl font-bold">+</button>
            </div>
        </li>
    )
}