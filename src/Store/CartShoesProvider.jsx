import React from "react";


const ShoesCartProviderContex = React.createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}

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

    const UserProgress = {
        progress: cart,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };



    return(
        <ShoesCartProviderContex.Provider value={UserProgress}>
            {children}
        </ShoesCartProviderContex.Provider>
        
    )
    
};

export default ShoesCartProviderContex