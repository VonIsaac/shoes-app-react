import { createContext, useReducer } from "react";

const ShoesCartContex = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
})


function shoesCart(state, action){
    if(action.type === 'ADD_SHOES'){
        const existingShoesItem = state.items.findIndex((item) => item.id === action.item.id);

        const updateShoes = [...state.items]
        if(existingShoesItem > -1 ){
            const existingShoes = state.items[existingShoesItem];
            const shoesItem = {
                ...existingShoes,
                quantity: existingShoes.quantity + 1
            }

            updateShoes[existingShoesItem] = shoesItem
        }else{
            updateShoes.push(
                {...action.item, quantity: 1}
            )
        }

        return {...state, items: updateShoes}
    }

        if(action.type === 'REMOVE_SHOES'){
            const existingShoesItem = state.items.findIndex((item) => item.id === action.id);
            
            const existingShoesCart = state.items[existingShoesItem];

            const updateShoes = [...state.items]

            if(existingShoesCart.quantity === 1){
                updateShoes.splice(existingShoesItem, 1)
            }else{
               const  updatedCartItem ={
                    ...existingShoesCart,
                    quantity: existingShoesCart.quantity - 1
                }

                updateShoes[existingShoesItem] = updatedCartItem
            }

            return{...state, items: updateShoes}

        }


        return state;

}






export function CartFunctionProvider({children}){
    const [cart, dispatch] = useReducer(shoesCart, {items: []});

    function addItem(item){
        dispatch({
            type: 'ADD_SHOES',
            item: item
        })
    };


    function removeItem(id){
        dispatch({
            type: 'REMOVE_SHOES',
            id: id
        })
    }

    const cartContext = {
        addItem: addItem,
        items: cart.items,
        removeItem: removeItem
    }

    console.log(cartContext)


    return(
        <ShoesCartContex.Provider value={cartContext}>
            {children}
        </ShoesCartContex.Provider>
    )
}

export default ShoesCartContex