import { AnimatePresence } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import Modal from "../";

import {
    ModalWrap,
    ButtonChangeImage,
    ImageModal
} from "./styles";

interface ImagesProps {
    images: string[];

    actualImageIndex: number;
    setActualImageIndex: Dispatch<SetStateAction<number>>;
}

interface ImageViewerModalProps {
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;

    imagesOptions: ImagesProps;
}


const ImageViewer: React.FC<ImageViewerModalProps> = ({
    imagesOptions,
    isVisible,
    setIsVisible,
}) => {
    const changeImage = (typeChange: 'NEXT' | 'PREVIOUS') => {
        const {images, actualImageIndex, setActualImageIndex} = imagesOptions;

        if (typeChange === 'NEXT')
        {
            actualImageIndex + 1 < images.length ? setActualImageIndex(actualImageIndex + 1) : setActualImageIndex(0);
        } else {
            actualImageIndex - 1 >= 0 ? setActualImageIndex(actualImageIndex - 1) : setActualImageIndex(images.length - 1);
        }
    }

    return(
        <Modal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            configs={{
                justifyContent: 'CENTER',
            }}
        >
            <ModalWrap
                initial={{
                    translateX: "-200%",
                }}
                animate={{
                    translateX: 0,
                }}
                exit={{
                    translateX: "-200%",
                }}
            >
                <ButtonChangeImage onClick={() => changeImage('PREVIOUS')}>
                    <i className="fa-solid fa-chevron-left"></i>
                </ButtonChangeImage>

                <ImageModal src={imagesOptions.images[imagesOptions.actualImageIndex]} />

                <ButtonChangeImage onClick={() => changeImage('NEXT')}>
                    <i className="fa-solid fa-chevron-right"></i>
                </ButtonChangeImage>
            </ModalWrap>
        </Modal>
    )
}

export default ImageViewer;