import styled from "styled-components";
import {motion} from 'framer-motion';
import { Colors } from "../../../styles/colors";


export const ModalWrap = styled(motion.div)`
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
        box-shadow: 4px 4px 2px ${Colors.darkGrayishBlue}4c;
    }

    &:last-of-type {
        transform: translateX(-25%);
        box-shadow: -4px 4px 2px ${Colors.darkGrayishBlue}4c;
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