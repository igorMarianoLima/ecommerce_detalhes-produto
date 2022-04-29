import React, { Dispatch, SetStateAction, useContext } from 'react';

import Product from './Product';

import CartContext from '../../context/Cart';

import { ProductName } from './Product/styles';
import { ModalContainer } from './styles';

export interface CartModalProps {
    isVisible: boolean;
    setIsVisible?: Dispatch<SetStateAction<boolean>>;
}

const CartModal: React.FC<CartModalProps> = ({isVisible, setIsVisible}) => {
    const {items} = useContext(CartContext);

    return(
        <ModalContainer isVisible={isVisible}>
            {items.length > 0 ? (
                <>
                    {items.map((item) => {
                        return(
                            <Product id={item.id} name={item.name} amount={item.amount} pricePerUnit={0} totalPrice={item.totalPrice} />
                        )
                    })}
                </>
                )
            : (
                <ProductName>Nenhum produto no carrinho :(</ProductName>
            )}
        </ModalContainer>
    )
}

export default CartModal;