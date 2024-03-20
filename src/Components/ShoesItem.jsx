
export default function ShoesItem({shoes}){

    return(
       <li>
        <article>
            <img src={`http://localhost:3000/${shoes.image}`} alt={shoes.name} />
            <h3>{shoes.name}</h3>
            <p>{shoes.price}</p>
            <p>{shoes.description}</p>
            <button>BUY</button>
        </article>
       </li>
    )   
}