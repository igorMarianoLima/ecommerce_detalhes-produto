import React, { useContext, useState } from 'react'; 

import { HandleCurrency } from '../../utils/HandleCurrency';

import Button from '../../components/Button';
import QuantifierInput from '../../components/QuantifierInput';
import ImageViewer from '../../components/Modal/ImageViewer';
import { Cart } from '../../components/Icons';

import { Container, Main, SneakersText } from '../../styles/global';
import {
    ActualImage,
    ButtonsContainer,
    ImageMiniature,
    ImagesContainer,
    ImagesList,
    InformationsContainer,
    LinePrices,
    OldPrice,
    PricesContainer,
    ProductContainer,
    ProductDescription,
    ProductDiscount,
    ProductPrice,
    ProductTitle,
    TextsContainer
} from './styles';

import ItemProps from '../../types/ItemProps';

import CartContext from '../../context/Cart';

import Product1 from '../../assets/images/pages/Product/image-product-1.jpg';
import Product2 from '../../assets/images/pages/Product/image-product-2.jpg';
import Product3 from '../../assets/images/pages/Product/image-product-3.jpg';
import Product4 from '../../assets/images/pages/Product/image-product-4.jpg';

interface PriceProps {
    oldPrice?: number;
    actualPrice: number;
}

export interface ProductProps {
    id: number;
    name: string;
    description: string;

    price: PriceProps;

    amountInStock: number;
    
    images: string[];
}


const ProductInfo: ProductProps =
{
    id: 1,
    name: 'Fall Limited Editions Sneakers',
    description: "These low-profiles sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    price: {
        oldPrice: 520,
        actualPrice: 409.99,
    },
    amountInStock: 4,

    images: [Product1, Product2, Product3, Product4],
}

const Product: React.FC = () => {
    const [productAmount, setProductAmount] = useState<number>(0);
    const [actualImageIndex, setActualImageIndex] = useState<number>(0);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const {items, setItems} = useContext(CartContext);
    const setNewItemOnCart = (newItem: ItemProps) => {
        let hasItem = items.some((item) => item.id === newItem.id);

        if (hasItem) {
            setItems(items.map(item => item.id === newItem.id ? newItem : item));

            return;
        }

        setItems([...items, newItem]);
    }

    const getDiscountPercentage = (oldPrice: number, actualPrice: number) => {
        if (oldPrice > 0 && actualPrice > 0)
        {
            let actualPercentage = actualPrice * 100 / oldPrice;
            let discountPercentage = Math.round(100 - actualPercentage);

            return discountPercentage;
        }

        return;
    }

    return(
        <>
            <Main>
                <Container>
                    <ProductContainer>
                        <ImagesContainer>
                            <ActualImage
                                src={ProductInfo.images[actualImageIndex]}
                                onClick={() => setIsModalOpen(true)}
                            />

                            <ImagesList>
                                {ProductInfo.images.map((image, index) =>
                                    <ImageMiniature
                                        key={index}
                                        src={image}
                                        isShowing={actualImageIndex === index}
                                        onClick={() => setActualImageIndex(index)}
                                    />
                                )}
                            </ImagesList>
                        </ImagesContainer>

                        <InformationsContainer>
                            <TextsContainer>
                                <SneakersText>Sneaker Company</SneakersText>

                                <ProductTitle>{ProductInfo.name}</ProductTitle>

                                <ProductDescription>
                                    {ProductInfo.description}
                                </ProductDescription>
                            </TextsContainer>

                            <PricesContainer>
                                <LinePrices>
                                    <ProductPrice>
                                        {HandleCurrency(ProductInfo.price.actualPrice)}
                                    </ProductPrice>
                                    
                                    {ProductInfo.price.oldPrice && (
                                        <ProductDiscount>
                                            {getDiscountPercentage(ProductInfo.price.oldPrice, ProductInfo.price.actualPrice)}
                                        </ProductDiscount>
                                    )}
                                </LinePrices>
                                {ProductInfo.price.oldPrice && (
                                    <LinePrices>
                                        <OldPrice>{HandleCurrency(ProductInfo.price.oldPrice)}</OldPrice>
                                    </LinePrices>
                                )}
                            </PricesContainer>

                            <ButtonsContainer>
                                <QuantifierInput
                                    amount={productAmount}
                                    setAmount={setProductAmount}
                                    maxAmount={ProductInfo.amountInStock}
                                />

                                <Button
                                    isDisabled={productAmount <= 0}
                                    type='ACTION'
                                    onClick={() => productAmount > 0 &&
                                        setNewItemOnCart({
                                            id: ProductInfo.id,
                                            name: ProductInfo.name,
                                            amount: productAmount,
                                            pricePerUnit: ProductInfo.price.actualPrice,
                                            totalPrice: ProductInfo.price.actualPrice * productAmount,
                                        })
                                    }
                                >
                                    <Cart fill='#fff' /> Add to cart
                                </Button>
                            </ButtonsContainer>
                        </InformationsContainer>
                    </ProductContainer>
                </Container>
            </Main>

            <ImageViewer
                isVisible={isModalOpen}
                setIsVisible={setIsModalOpen}
                imagesOptions={{
                    images: ProductInfo.images,
                    actualImageIndex: actualImageIndex,
                    setActualImageIndex: setActualImageIndex,
                }}
            />
        </>
    )
}

export default Product;