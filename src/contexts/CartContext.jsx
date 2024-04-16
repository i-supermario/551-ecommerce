import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartContextProvider(props){

    const [cart,setCart] = useState([])
    
    
    const updateCartItem = (item,operation) => {
        setCart(cart => {
            const index = cart.findIndex(it => it.name == item.name)
            if(index!=-1){
                const tempCart = [...cart]
                if(operation=='ADD' && tempCart[index].count < tempCart[index].quantity ){
                    console.log('Adding')
                    tempCart[index].count += 1
                }
                else if(operation=='REMOVE' && tempCart[index].count > 0){
                    console.log('Removing')
                    tempCart[index].count -= 1
                    if(tempCart[index].count==0) tempCart.splice(index, 1);
                }
                return tempCart
            }
            else {
                console.log('Item doesnt exist')
                return [...cart,{...item,count:1}]
            }
        })
    } 

    return(
        <CartContext.Provider value={{cart,updateCartItem}} >
            {props.children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}