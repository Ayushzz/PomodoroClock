import React from 'react';
import Moment from 'moment';
import {BreakSessionContainer, BreakSessionLabel, BreakSessionTime, PlusMinusButtonContainer, PlusMinusButton} from '../ui/BreakSessionUi';

const Break = ({breakLength,decrementBreakLengthByOneMinute,incrementBreakLengthByOneMinute}) => {

const breakLengthInMinutes = Moment.duration(breakLength, 's').minutes();
return (
    <BreakSessionContainer>
    <BreakSessionLabel id="break-label">Break</BreakSessionLabel>
    <BreakSessionTime id="break-length">{breakLengthInMinutes}</BreakSessionTime>
    <PlusMinusButtonContainer>
    <PlusMinusButton id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</PlusMinusButton>
    <PlusMinusButton id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</PlusMinusButton>
    </PlusMinusButtonContainer>
    </BreakSessionContainer>
);
};

export default Break;
