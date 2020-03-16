import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStart, timerLabel, startStopLabel, timeLeft }) => {
	//format clock to 00:00
	let formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

	return (
		<div>
			<p id="timer-label">{timerLabel}</p>
			<p id="time-left">{formattedTimeLeft}</p>
			<button id="start_stop" onClick={handleStart}>
				{startStopLabel}
			</button>
		</div>
	);
};

export default TimeLeft;
