import React, {createContext, Dispatch, PropsWithChildren,  SetStateAction, useState} from 'react';
import ItemProps from '../types/ItemProps';

interface CartContextProps {
    items: ItemProps[];
    setItems: Dispatch<SetStateAction<ItemProps[]>>;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider: React.FC<PropsWithChildren<any>> = ({children}) => {
    const [items, setItems] = useState<ItemProps[]>([]);

    return(
        <CartContext.Provider value={{items, setItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;