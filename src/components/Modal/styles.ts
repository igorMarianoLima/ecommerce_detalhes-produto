import styled from "styled-components";

import {motion} from 'framer-motion';

import { ModalContainerProps } from "./";
import { Colors } from "../../styles/colors";

export const ModalWrap = styled(motion.div).attrs({
    initials: {
        translateY: "-50%",
        translateX: "-50%",
        opacity: 1,
    },

    exit: {
        opacity: 0,
    }
})`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;


    background-color: ${Colors.darkGrayishBlue}cf;
`;

export const CloseModalArea = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: transparent;
`;

export const ModalContainer = styled.div<ModalContainerProps>`
    position: relative;

    display: flex;

    ${props => props.backgroundColor && "background-color: "+ props.backgroundColor};
    ${props => props.justifyContent && 'justify-content: ' + props.justifyContent.toLowerCase()};
`;
