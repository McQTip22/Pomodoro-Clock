import React, { useState, useEffect, useRef } from 'react';
import Break from './components/break';
import Session from './components/session';
import TimeLeft from './components/timeLeft';
import './App.css';

function App() {
	let audioElement = useRef(null);
	// session functions
	let [ currentSessionType, setCurrentSessionType ] = useState('Session');
	let [ intervalId, setIntervalId ] = useState(null);
	let [ sessionLength, setSessionLength ] = useState(1500);
	let [ breakLength, setBreakLength ] = useState(300);
	let [ timeLeft, setTimeLeft ] = useState(sessionLength);

	//set clock to adjusted session length
	useEffect(
		() => {
			setTimeLeft(sessionLength);
		},
		[ sessionLength ]
	);

	const decrementSessionLengMinute = () => {
		const newSessionLength = sessionLength - 60;

		if (newSessionLength <= 1) {
			setSessionLength(1);
		} else {
			setSessionLength(newSessionLength);
		}
	};

	const incrementSessionLengthMinute = () => {
		setSessionLength(sessionLength + 60);
	};

	//break functions

	const decrementBreakLengMinute = () => {
		const newBreakLength = breakLength - 60;

		if (newBreakLength <= 1) {
			setBreakLength(1);
		} else {
			setBreakLength(newBreakLength);
		}
	};

	const incrementBreakLengthMinute = () => {
		setBreakLength(breakLength + 60);
	};

	//Start/stop button
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
					//play audio at 0
					audioElement.current.play();
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

	//reset button
	const handleReset = () => {
		audioElement.current.load();
		clearInterval(intervalId);
		setIntervalId(null);
		setCurrentSessionType('Session');
		setSessionLength(60 * 25);
		setBreakLength(60 * 5);
		setTimeLeft(60 * 25);
	};

	return (
		<div class="container">
			<Break
				breakLength={breakLength}
				decrementBreakLengMinute={decrementBreakLengMinute}
				incrementBreakLengthMinute={incrementBreakLengthMinute}
			/>
			<TimeLeft
				handleStart={handleStart}
				timerLabel={currentSessionType}
				startStopLabel={isStarted ? 'STOP' : 'START'}
				timeLeft={timeLeft}
				handleReset={handleReset}
			/>
			<Session
				sessionLength={sessionLength}
				decrementSessionLengMinute={decrementSessionLengMinute}
				incrementSessionLengthMinute={incrementSessionLengthMinute}
			/>

			<audio id="beep" ref={audioElement}>
				<source src="https://www.fesliyanstudios.com/play-mp3/4386" type="audio/mpeg" />
			</audio>
		</div>
	);
}

export default App;
