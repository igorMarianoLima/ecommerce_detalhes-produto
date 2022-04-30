import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Amount, AmountContainer, ButtonQuantifier, QuantifierContainer } from './styles';

interface QuantifierProps {
    amount?: number;
    setAmount: Dispatch<SetStateAction<number>>;
    maxAmount?: number;
}

const QuantifierInput: React.FC<QuantifierProps> = ({amount = 0, setAmount, maxAmount}) => {
    const [buttonDisabled, setButtonDisabled] = useState<'NONE' | 'DECREMENT' | 'INCREMENT'>('NONE');

    const changeAmount = (typeChange: 'INCREMENT' | 'DECREMENT') => {
        if (typeChange === 'INCREMENT')
        {
            if (maxAmount){
                amount + 1 <= maxAmount && setAmount(amount + 1);
            } else {
                setAmount(amount + 1);
            }
        } else {
            amount > 0 && setAmount(amount - 1);
        }
    }

    useEffect(() => {
        if (amount === maxAmount) {
            setButtonDisabled('INCREMENT');
        } else if (amount <= 0) {
            setButtonDisabled('DECREMENT');
        } else {
            setButtonDisabled('NONE');
        }
    }, [amount])

    return(
        <QuantifierContainer>
            <ButtonQuantifier
                disabled={buttonDisabled === 'DECREMENT'}
                onClick={() => changeAmount('DECREMENT')}
            >
                -
            </ButtonQuantifier>

            <AmountContainer>
                <Amount>{amount}</Amount>
            </AmountContainer>

            <ButtonQuantifier
                disabled={buttonDisabled === 'INCREMENT'}
                onClick={() => changeAmount('INCREMENT')}
            >
                +
            </ButtonQuantifier>
        </QuantifierContainer>
    )
}

export default QuantifierInput;