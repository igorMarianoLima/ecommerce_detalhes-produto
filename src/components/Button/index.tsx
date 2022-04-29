import React, { PropsWithChildren } from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
    isDisabled: boolean;
    type: "ACTION";
    onClick: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({isDisabled, type, onClick, children}) => {
    return(
        <StyledButton disabled={isDisabled} buttonType={type} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button;