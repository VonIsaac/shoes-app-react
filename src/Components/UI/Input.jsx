
export default function Input({label, id, ...props}){

    return(
        <p>
            <label htmlFor={id} className=" ">{label}</label> <br />
            <input  id={id} name= {id}  required {...props} className=" mt-1 mb-2 rounded-sm bg-stone-400"/>
        </p>
    )
}