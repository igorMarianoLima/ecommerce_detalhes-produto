import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Amount, AmountContainer, ButtonQuantifier, QuantifierContainer } from './styles';

interface QuantifierProps {
    amount?: number;
    setAmount: Dispatch<SetStateAction<number>>;
    maxAmount?: number;
}

const QuantifierInput: React.FC<QuantifierProps> = ({amount = 0, setAmount, maxAmount}) => {
    const [isWarned, setIsWarned] = useState<boolean>(false);

    const changeAmount = (typeChange: 'INCREMENT' | 'DECREMENT') => {
        if (typeChange === 'INCREMENT')
        {
            if (maxAmount){
                amount + 1 <= maxAmount ? setAmount(amount + 1) : setIsWarned(true);
            } else {
                setAmount(amount + 1);
            }
        } else {
            amount > 0 ? setAmount(amount - 1) : setIsWarned(true);
        }
    }

    useEffect(() => {
        if (isWarned)
        {
            setTimeout(() => {
                setIsWarned(false);
            }, 750)
        }
    }, [isWarned])

    return(
        <QuantifierContainer isWarned={isWarned}>
            <ButtonQuantifier onClick={() => changeAmount('DECREMENT')}>
                -
            </ButtonQuantifier>

            <AmountContainer>
                <Amount>{amount}</Amount>
            </AmountContainer>

            <ButtonQuantifier onClick={() => changeAmount('INCREMENT')}>
                +
            </ButtonQuantifier>
        </QuantifierContainer>
    )
}

export default QuantifierInput;