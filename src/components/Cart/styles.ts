import styled from "styled-components";
import { Colors } from "../../styles/colors";
import { CartModalProps } from "./";

export const ModalContainer = styled.div<CartModalProps>`
    position: absolute;
    top: 100%;
    right: 50%;

    transform: translateX(+25%);

    min-width: 360px;
    height: fit-content;

    background-color: #fffafa;
    box-shadow: 0px 6px 8px ${Colors.lightGray + '2f'};

    border: .5px solid ${Colors.lightGrayishBlue};
    border-top: hidden;
    border-radius: 0 0 12px 12px;

    padding: 20px;

    opacity: ${(props) => props.isVisible ? 1 : 0};
    visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};

    transition: all .5s;
`;