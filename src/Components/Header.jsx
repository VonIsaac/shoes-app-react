import Shoes from '../assets/nike.jpg'

export default function Header(){

    return(
        <header className=' flex '>

          <div className=' ml-8 my-12 flex'>
            <img src= {Shoes} alt="Logo" className=' w-[15%] ' />
            <h1  className=' text-4xl font-medium text-neutral-500 ml-4 mt-6'>Step in Style</h1>
          </div>

            <div className=' ml-auto mr-10 my-[70px] '>
                
             <button className=' text-gray-500 font-medium text-3xl' >Cart(0)</button>
            </div>
        </header>
    )
}