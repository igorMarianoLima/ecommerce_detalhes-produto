import styled from "styled-components";
import { Colors } from "../../styles/colors";

export type ButtonTypes = 'ACTION';

interface ButtonProps {
    buttonType: ButtonTypes;
}

const ButtonStyles = {
    'ACTION': {
        bgColor: Colors.orange,
        color: Colors.lightGrayishBlue,
    }
}

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px 36px;

    background-color: ${props => ButtonStyles[props.buttonType].bgColor.normal};

    border-radius: 12px;

    font-weight: 700;
    font-size: 1rem;
    color: ${props => ButtonStyles[props.buttonType].color};

    & svg {
        margin-right: 12px;
    }

    &:hover {
        background-color: ${props => ButtonStyles[props.buttonType].bgColor.hover};
    }

    &:disabled {
        background-color: ${props => ButtonStyles[props.buttonType].bgColor.disabled};
    }

    transition: background-color .75s;
`;