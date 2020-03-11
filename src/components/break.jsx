import React from 'react';
import moment from 'moment';

const Break = ({ breakLength, decrementBreakLengMinute, incrementBreakLengthMinute }) => {
	const breakLengthMinutes = moment.duration(breakLength, 's').minutes();

	return (
		<div>
			<p id="break-label">BREAK</p>
			<p id="break-length">{breakLengthMinutes}</p>
			<button id="break-decrement" onClick={decrementBreakLengMinute}>
				-
			</button>
			<button id="break-increment" onClick={incrementBreakLengthMinute}>
				+
			</button>
		</div>
	);
};

export default Break;
