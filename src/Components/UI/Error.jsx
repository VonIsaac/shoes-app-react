export default function Error({title, message}){

    return(
        <div className=" flex justify-center items-center bg-neutral-500  w-[25%] py-8 mx-auto">
            <div>
                <h2 className=" text-neutral-800 text-3xl mb-1 font-semibold">{title}</h2>
                <p className=" text-gray-800 font-normal">{message}</p>
            </div>
               
        </div>
    )
}