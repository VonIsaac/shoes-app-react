
export default function CartItem({name, qauntity, price}){
    return(
        <li>
            <p>
                {name} - {qauntity} + {price}
            </p>

            <div>
                <button>-</button>
                <p>{qauntity}</p>
                <button>+</button>
            </div>
        </li>
    )
}