import React from 'react';
import Moment from 'moment';
import {BreakSessionContainer, BreakSessionLabel,BreakSessionTime, PlusMinusButtonContainer, PlusMinusButton} from '../ui/BreakSessionUi';

const Session = (props) => {
    const {sessionLength, decrementSessionLengthByOneMinute, incrementSessionLengthByOneMinute}=props;

    const sessionLengthInMinutes = Moment.duration(sessionLength, 's').minutes();
return (
    <BreakSessionContainer>
    <BreakSessionLabel id="session-label">Session</BreakSessionLabel>
    <BreakSessionTime id="session-length">{sessionLengthInMinutes}</BreakSessionTime>
    <PlusMinusButtonContainer>
    <PlusMinusButton id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</PlusMinusButton>
    <PlusMinusButton id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</PlusMinusButton>
    </PlusMinusButtonContainer>
    </BreakSessionContainer>
    );
};

export default Session;
