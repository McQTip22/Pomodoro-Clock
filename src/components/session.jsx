import React from 'react';
import moment from 'moment';
import './views/settings.css';

const Session = ({ sessionLength, decrementSessionLengMinute, incrementSessionLengthMinute }) => {
	const sessionLengthMinutes = moment.duration(sessionLength, 's').minutes();

	return (
		<div class="settings">
			<p id="session-label">SESSION</p>
			<button id="session-increment" onClick={incrementSessionLengthMinute}>
				+
			</button>
			<p id="session-length">{sessionLengthMinutes}</p>
			<button id="session-decrement" onClick={decrementSessionLengMinute}>
				-
			</button>
		</div>
	);
};

export default Session;
