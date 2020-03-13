import React, { useState, useEffect } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ breakLength, sessionLength }) => {
	let [ currentSessionType, setCurrentSessionType ] = useState('Session');
	let [ intervalId, setIntervalId ] = useState(null);
	let [ timeLeft, setTimeLeft ] = useState(sessionLength);

	//set clock to adjusted session length
	useEffect(
		() => {
			setTimeLeft(sessionLength);
		},
		[ sessionLength ]
	);

	let isStarted = intervalId != null;
	let handleStart = () => {
		if (isStarted) {
			//stop clock countdown
			clearInterval(intervalId);
			setIntervalId(null);
		} else {
			//have clock count down
			let newIntervalId = setInterval(() => {
				setTimeLeft((prevTimeLeft) => {
					const newTimeLeft = prevTimeLeft - 1;
					if (newTimeLeft >= 0) {
						return prevTimeLeft - 1;
					}
					//switch between break and session

					//if session
					if (currentSessionType === 'Session') {
						setCurrentSessionType('Break');
						//set timer to break time
						setTimeLeft(breakLength);
						//if break
					} else if (currentSessionType === 'Break') {
						//set timer to session
						setCurrentSessionType('Session');
						setTimeLeft(sessionLength);
					}
				});
			}, 1000);
			setIntervalId(newIntervalId);
		}
	};

	//format clock to 00:00
	let formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });

	return (
		<div>
			<p id="timer-label">{currentSessionType}</p>
			<p id="time-left">{formattedTimeLeft}</p>
			<button id="start_stop" onClick={handleStart}>
				{isStarted ? 'STOP' : 'START'}
			</button>
		</div>
	);
};

export default TimeLeft;
