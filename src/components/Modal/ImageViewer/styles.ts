import styled from "styled-components";


export const ModalWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonChangeImage = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;

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

    @media screen and (max-width: 375px) {
        width: 32px;
        min-width: 32px;
        height: 32px;
        min-height: 32px;
    }
`;

export const ImageModal = styled.img`
    max-width: 750px;
    width: 85%;

    border-radius: 20px;

    @media screen and (max-width: 375px) {
        width: 75%;
    }
`;