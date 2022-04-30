import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 32px 0;

    box-shadow: 0 2px ${Colors.lightGray + '1f'};

    @media screen and (max-width: 375px){
        padding: 16px 0;
    }
`;

export const Navigator = styled.nav`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 100%;
`;

export const LinksContainer = styled.ul`
    display: flex;
    align-items: center;

    margin-left: 24px;


    @media screen and (max-width: 375px){
        display: none;
    }
`;

export const LinkContainer = styled.li``;

export const Link = styled.a`
    position: relative;

    color: ${Colors.darkGrayishBlue};

    margin-left: 24px;

    &::before {
        position: absolute;
        left: 0;
        bottom: -4px;
        
        content: '';

        width: 0;
        height: 2px;

        border-radius: 4px;

        background-color: ${Colors.orange.normal};

        transition: all .4s;
        transition-timing-function: ease-in-out;
    }

    &:hover {
        &::before {
            width: 100%;
        }
    }
`;

export const ProfileLinks = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileAvatar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 52px;
    height: 52px;

    border-radius: 50%;

    background-color: ${Colors.lightGray};


    @media screen and (max-width: 375px){
        height: 40px;
        width: 40px;
    }
`;

export const CartButtonContainer = styled.div`
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartButton = styled(ProfileAvatar)`
    position: relative;

    background-color: transparent;

    margin-right: 24px;

    &:hover {
        background-color: ${Colors.lightGrayishBlue};
    }

    transition: all .4s;
`;

export const ItensAmountContainer = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 4px;
    right: 4px;
    
    width: 20px;
    height: 20px;

    border-radius: 50%;

    font-size: 12px;

    background-color: ${Colors.orange.normal};
    color: ${Colors.paleOrange};

    @media screen and (max-width: 375px){
        top: 0;

        height: 16px;
        width: 16px;

        font-size: 10px;
    }
`;