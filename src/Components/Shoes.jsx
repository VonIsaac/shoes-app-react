import React from "react";
import ShoesItem from "./ShoesItem";
import Error from "./UI/Error";

export default  function Shoes(){
    const [fetchingImage, setFetchingImage ] = React.useState([]);
    const [error, setError] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false)


    React.useEffect(() => {
        async function myFetching(){
            setIsLoading(true)
            try{
                const response = await fetch('http://localhost:3000/shoes');
                const restData = await response.json()

                if(!response.ok){
                    throw new Error('Failed to Fetch Data')
                }

                setFetchingImage(restData);
            }catch(error){
                setError({
                    error: error.message || "Failed to Fetch Shoes Data"
                })
            }
            setIsLoading(false)
        }    
        
        myFetching()
    }, []);


    
    if(isLoading){
        return <h1 className=" text-center text-4xl text-neutral-500 font-semibold">Fetching Data.......</h1>
    }

  
      
    if(error){
        return  <Error title= "Failed to Fetch Shoes Data" message= "Failed to Fetch  Data" /> 
    }
 
  

    return(
        <ul  className="grid grid-rows-7 grid-flow-col gap-2">
            
            {fetchingImage.map((shoes) => (
                  <ShoesItem key={shoes.id} shoes={shoes} />
            ))}
        </ul>
    )
}

//