import React from 'react';
import moment from 'moment';
import './views/settings.css';

const Break = ({ breakLength, decrementBreakLengMinute, incrementBreakLengthMinute }) => {
	const breakLengthMinutes = moment.duration(breakLength, 's').minutes();

	return (
		<div class="settings">
			<p id="break-label">BREAK</p>
			<button id="break-increment" onClick={incrementBreakLengthMinute}>
				+
			</button>
			<p id="break-length">{breakLengthMinutes}</p>
			<button id="break-decrement" onClick={decrementBreakLengMinute}>
				-
			</button>
		</div>
	);
};

export default Break;
