import React, { useContext, useState } from "react";
import { Container } from "../../styles/global";
import { CartButton, CartButtonContainer, HeaderContainer, ItensAmountContainer, Link, LinkContainer, LinksContainer, Logo, Navigator, ProfileAvatar, ProfileLinks } from "./styles";

import LogoImage from '../../assets/images/svg/logo.svg';
import { Cart } from "../Icons";
import CartContext from "../../context/Cart";
import CartModal from "../Cart";

const Navbar: React.FC = () => {
    const {items} = useContext(CartContext);

    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

    return(
        <Container>
            <HeaderContainer>
                <Navigator>
                    <Logo src={LogoImage} />

                    <LinksContainer>
                        <LinkContainer>
                            <Link href="">Collections</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="">Men</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="">Women</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="">About</Link>
                        </LinkContainer>

                        <LinkContainer>
                            <Link href="">Contact</Link>
                        </LinkContainer>
                    </LinksContainer>
                </Navigator>

                <ProfileLinks>
                    <CartButtonContainer>
                        <CartButton onClick={() => setIsCartVisible(!isCartVisible)}>
                            <Cart />
                            <ItensAmountContainer>
                                {items.length}
                            </ItensAmountContainer>
                        </CartButton>

                        <CartModal isVisible={isCartVisible} />
                    </CartButtonContainer>
                    
                    <ProfileAvatar />
                </ProfileLinks>
            </HeaderContainer>
        </Container>
    )
}

export default Navbar;