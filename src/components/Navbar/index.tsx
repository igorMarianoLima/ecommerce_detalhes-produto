import React, { useContext, useState } from "react";

import { Container } from "../../styles/global";
import {
    CartButton,
    CartButtonContainer,
    HeaderContainer,
    ItensAmountContainer,
    Link,
    LinkContainer,
    LinksContainer,
    Logo,
    Navigator,
    ProfileAvatar,
    ProfileLinks
} from "./styles";

import CartContext from "../../context/Cart";

import { Cart } from "../Icons";
import CartModal from "../Cart";

import LogoImage from '../../assets/images/svg/logo.svg';

const Navbar: React.FC = () => {
    const {items} = useContext(CartContext);

    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

    return(
        <Container>
            <HeaderContainer>
                <Navigator>
                    <Logo title="Sneaker's Logo" src={LogoImage} />

                    <LinksContainer>
                        <LinkContainer>
                            <Link href="#">Collections</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="#">Men</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="#">Women</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="#">About</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="#">Contact</Link>
                        </LinkContainer>
                    </LinksContainer>
                </Navigator>

                <ProfileLinks>
                    <CartButtonContainer>
                        <CartButton title="Abrir carrinho" onClick={() => setIsCartVisible(!isCartVisible)}>
                            <Cart />
                            <ItensAmountContainer>
                                {items.length}
                            </ItensAmountContainer>
                        </CartButton>

                        <CartModal isVisible={isCartVisible} />
                    </CartButtonContainer>
                    
                    <ProfileAvatar title="Ir para Perfil" />
                </ProfileLinks>
            </HeaderContainer>
        </Container>
    )
}

export default Navbar;