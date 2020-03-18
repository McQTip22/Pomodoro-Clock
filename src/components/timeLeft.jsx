import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import './views/clock.css';

momentDurationFormatSetup(moment);

const TimeLeft = ({ handleStart, timerLabel, startStopLabel, timeLeft, handleReset }) => {
	//format clock to 00:00
	let formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

	return (
		<div class="clock">
			<h1 id="timer-label">{timerLabel}</h1>
			<p id="time-left">{formattedTimeLeft}</p>
			<div className="btns">
				<button id="start_stop" onClick={handleStart}>
					{startStopLabel}
				</button>
				<button id="reset" onClick={handleReset}>
					RESET
				</button>
			</div>
		</div>
	);
};

export default TimeLeft;
