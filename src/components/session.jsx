import React from 'react';
import moment from 'moment';

const Session = ({ sessionLength, decrementSessionLengMinute, incrementSessionLengthMinute }) => {
	const sessionLengthMinutes = moment.duration(sessionLength, 's').minutes();

	return (
		<div>
			<p id="session-label">SESSION</p>
			<p id="session-length">{sessionLengthMinutes}</p>
			<button id="session-decrement" onClick={decrementSessionLengMinute}>
				-
			</button>
			<button id="session-increment" onClick={incrementSessionLengthMinute}>
				+
			</button>
		</div>
	);
};

export default Session;
