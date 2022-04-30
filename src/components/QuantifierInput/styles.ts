import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const QuantifierContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 12px;

    background-color: ${Colors.lightGrayishBlue};

    transition: border .4s;
`;

export const ButtonQuantifier = styled.button`
    appearance: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 10px;

    padding: 12px 24px;

    font-size: 28px;
    font-weight: 700;

    background-color: transparent;

    color: ${Colors.orange.normal};

    &:disabled {
        opacity: 0;
    }

    transition: opacity linear .2s;
`;

export const AmountContainer = styled.div`
    width: 40px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Amount = styled.p`
    font-weight: 700;

    color: ${Colors.veryDarkBlue};
`;