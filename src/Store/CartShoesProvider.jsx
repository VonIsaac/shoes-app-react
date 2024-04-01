import React from "react";


const ShoesCartProviderContex = React.createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
    showSucces: () => {}

})


export function CartShoesProvider({children}){
    const [cart, setCart] = React.useState('');


    function showCart(){
        setCart('cart')
    };


    function hideCart(){
        setCart('')
    }


    function showCheckout(){
        setCart('checkout')
    }

    function hideCheckout(){
        setCart('')
    }

    function showSucces(){
        setCart('succes')
    }

    const UserProgress = {
        progress: cart,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout, 
        showSucces
    };



    return(
        <ShoesCartProviderContex.Provider value={UserProgress}>
            {children}
        </ShoesCartProviderContex.Provider>
        
    )
    
};

export default ShoesCartProviderContex