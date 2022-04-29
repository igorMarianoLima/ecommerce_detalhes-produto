import styled from "styled-components";
import { Colors } from "../../../styles/colors";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 20px 12px;
    border-bottom: .5px solid ${Colors.lightGray + '4f'};
`;

export const MainInformations = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProductName = styled.p`
    font-size: 16px;
    font-weight: 700;

    margin-right: 24px;

    color: ${Colors.darkGrayishBlue};
`;

export const ProductAmount = styled.p`
    min-width: 24px;
    width: 24px;
    min-height: 24px;
    height: 24px;

    font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: ${Colors.mediumGreen};

    color: ${Colors.lightGrayishBlue};
`;

export const ProductPrice = styled.p`
    &::before {
        content: '$';
    }

    margin: 8px 0;

    text-align: left;
    font-size: 14px;
    font-weight: 700;

    color: ${Colors.grayishBlue};
`;

export const ButtonRemove = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;


    background-color: transparent;
    color: ${Colors.lightGray};
`;
