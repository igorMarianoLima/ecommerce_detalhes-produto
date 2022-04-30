import styled from "styled-components";


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