import React, { useContext, useEffect } from "react";
import CartContext from "../../../context/Cart";
import ItemProps from "../../../types/ItemProps";
import { HandleCurrency } from "../../../utils/HandleCurrency";

import { ButtonRemove, MainInformations, ProductAmount, ProductContainer, ProductName, ProductPrice } from "./styles";

const Product: React.FC<ItemProps> = ({id, name, amount, totalPrice}) => {
    const {items, setItems} = useContext(CartContext);

    const removeItem = () => {
        setItems(items.filter((item) => item.id !== id && item));
    }

    return(
        <ProductContainer>
            <MainInformations>
                <ProductName>{name}</ProductName>
                <ProductAmount>{amount}</ProductAmount>
            </MainInformations>

            <ProductPrice>{HandleCurrency(totalPrice)}</ProductPrice>

            <ButtonRemove onClick={() => removeItem()}>
                X
            </ButtonRemove>
        </ProductContainer>
    )
}

export default Product;