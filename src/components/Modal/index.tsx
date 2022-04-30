import { AnimatePresence } from 'framer-motion';
import React, { Dispatch, PropsWithChildren, SetStateAction, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CloseModalArea, ModalContainer, ModalWrap } from './styles';

export interface ModalContainerProps {
    backgroundColor?: string;
    justifyContent?: 'CENTER' | 'FLEX-START' | 'FLEX-END';
}

interface ModalProps {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;

    onOpen?: () => void;
    onClose?: () => void;

    configs?: ModalContainerProps;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
    children,
    isVisible,
    setIsVisible,
    onOpen,
    onClose,
    configs
}) => {
    const body = document.body;

    useEffect(() => {
        isVisible ? onOpen && onOpen() : onClose && onClose();
    }, [isVisible])

    return(
        createPortal(
            <AnimatePresence>
                {isVisible && (
                    <ModalWrap>
                        <CloseModalArea onClick={() => setIsVisible(false)} />
        
                        <ModalContainer {...configs}>
                            {children}
                        </ModalContainer>
                    </ModalWrap>
                )}
            
            </AnimatePresence>,
            body
        )
    )
}

export default Modal;