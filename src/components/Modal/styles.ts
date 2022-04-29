import styled from "styled-components";
import { ModalContainerProps } from "./";
import { Colors } from "../../styles/colors";

interface ModalProps {
    isVisible: boolean;
}

export const ModalWrap = styled.div<ModalProps>`
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

    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};

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
