import { createContext, useReducer } from "react";

const ShoesCartContex = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
})


function shoesCartReducer(state, action){
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
            updateShoes.push({...action.item, quantity: 1})
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


 /*function cartReducer(state, action){
    if(action.type === 'ADD_SHOES'){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

        const updateItems = [...state.items]
        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
   
            updateItems[existingCartItemIndex] = updatedItem; 
        }else{
            updateItems.push({...action.item, quantity: 1 })
        }

        return{...state, items: updateItems}
    }

    if(action.type === 'REMOVE_SHOES'){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];
        if(existingCartItem.quantity === 1){
            updatedItems.splice(existingCartItemIndex, 1)
        }else{
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            };

            updatedItems[existingCartItemIndex] = updatedItem
        }

        return{...state, items: updatedItems}

    }

    if(action.type === 'CLEAR_CART'){
        return{
            ...state, items: []
        }
    }

    return state;
}*/






export function CartFunctionProvider({children}){
    const [cart, dispatch] = useReducer(shoesCartReducer, {items: []});

    function addItems(item){
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
        items: cart.items,
        addItem: addItems,
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