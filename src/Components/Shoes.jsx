import React from "react";
import ShoesItem from "./ShoesItem";

export default  function Shoes(){
    const [fetchingImage, setFetchingImage ] = React.useState([]);
    const [error, setError] = React.useState()


    React.useEffect(() => {
        async function myFetching(){
            try{
                const response = await fetch('http://localhost:3000/shoes');
                const restData = await response.json()
                setFetchingImage(restData);

                if(!response.ok){
                    throw new Error('Failed to Fetch Data')
                }
            }catch(error){
                setError({
                    error: error.message || "Failed to Fetch Shoes Data"
                })
            }
        
        }    
      
        myFetching()
    }, []);


    if(error){
        return <h1 className=" text-center text-white text-2xl">ERROR FETCH</h1>
    }
 
  

    return(
        <ul  className="grid grid-rows-5 grid-flow-col gap-2">
            {fetchingImage.map((shoes) => (
                <ShoesItem key={shoes.id} shoes={shoes}/>
            ))}
        </ul>
    )
}