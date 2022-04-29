import styled from "styled-components";
import { Colors } from "../../styles/colors";

const MAIN_BORDER_RADIUS = 12;

export const ProductContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 5%;

    & > section {
        width: calc(50% - 52px);

        &:first-of-type {
            max-width: 460px;
        }
        

        @media screen and (max-width: 375px){
            width: 100%;
        }
    }

    @media screen and (max-width: 375px){
        flex-direction: column;
        align-items: initial;
        justify-content: initial;

        padding: 0;
    }
`;

export const ImagesContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

interface ActualImageProps {
    src: string;
}

export const ActualImage = styled.button<ActualImageProps>`
    width: 100%;
    padding-top: 90%;

    border-radius: ${MAIN_BORDER_RADIUS}px;

    background-color: ${Colors.lightGray};
    background-image: url(${props => props.src});
    background-size: cover;

    transition: all .4s;

    @media screen and (max-width: 375px){
        margin-bottom: 40px;
    }
`;

export const ImagesList = styled.ul`
    width: 100%;

    margin: 32px 0;

    display: flex;
    align-items: stretch;

    overflow: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 375px){
        display: none;
    }
`;

interface ImageMiniatureProps {
    isShowing?: boolean;
    src: string;
}

export const ImageMiniature = styled.button<ImageMiniatureProps>`
    ${props => !props.isShowing && "cursor: pointer"};

    width: 100px;
    min-width: 100px;
    height: 100px;
    min-height: 100px;

    border-radius: ${MAIN_BORDER_RADIUS}px;

    background-color: ${Colors.lightGray};
    background-image: url(${props => props.src});
    background-size: cover;
    
    ${props => props.isShowing && "border: 2px solid "+ Colors.orange.normal + 'cc'};

    &:not(:first-of-type) {
        margin-left: 16px;
    }
`;

export const InformationsContainer = styled.section``;

export const TextsContainer = styled.div``;

export const ProductTitle = styled.h2`
    font-size: 2.1rem;

    margin: 12px 0;
`;

export const ProductDescription = styled.p`
    color: ${Colors.darkGrayishBlue};

    margin: 32px 0;

    @media screen and (max-width: 375px){
        margin: 20px 0;
    }
`;

export const PricesContainer = styled.div``;

export const ProductPrice = styled.p`
    font-size: 1.75rem;
    font-weight: 700;

    &::before {
        content: '$';
    }
`;

export const OldPrice = styled(ProductPrice)`
    color: ${Colors.lightGray};

    font-size: 1.2rem;
    text-decoration: line-through;
    line-height: 20px;

    margin: 4px 0;
    margin-left: 16px;
`;

export const LinePrices = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductDiscount = styled.div`
    cursor: default;

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 36px;
    height: 36px;

    padding: 0 8px;

    border-radius: 8px;

    color: ${Colors.orange.normal};
    font-weight: 700;
    font-size: 14px;

    background-color: ${Colors.paleOrange};

    margin-left: 24px;

    ::after {
        content: '%';
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 32px 0;
`;

export const ModalWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonChangeImage = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;

    background-color: #fff;

    border-radius: 50%;

    &:first-of-type {
        transform: translateX(+25%);
    }

    &:last-of-type {
        transform: translateX(-25%);
    }

    &:active {
        filter: brightness(0.9);
    }

    transition: filter .4s;
`;

export const ImageModal = styled.img`
    max-width: 750px;
    width: 85%;

    border-radius: 20px;
`;