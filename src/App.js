import React, { useState } from 'react';
import Break from './components/break';
import Session from './components/session';
import TimeLeft from './components/timeLeft';
import './App.css';

function App() {
	// session functions
	const [ sessionLength, setSessionLength ] = useState(1500);

	const decrementSessionLengMinute = () => {
		const newSessionLength = sessionLength - 60;

		if (newSessionLength < 0) {
			setSessionLength(0);
		} else {
			setSessionLength(newSessionLength);
		}
	};

	const incrementSessionLengthMinute = () => {
		setSessionLength(sessionLength + 60);
	};

	//break functions
	const [ breakLength, setBreakLength ] = useState(300);

	const decrementBreakLengMinute = () => {
		const newBreakLength = breakLength - 60;

		if (newBreakLength < 0) {
			setBreakLength(0);
		} else {
			setBreakLength(newBreakLength);
		}
	};

	const incrementBreakLengthMinute = () => {
		setBreakLength(breakLength + 60);
	};

	return (
		<div className="App">
			<Break
				breakLength={breakLength}
				decrementBreakLengMinute={decrementBreakLengMinute}
				incrementBreakLengthMinute={incrementBreakLengthMinute}
			/>
			<TimeLeft sessionLength={sessionLength} />
			<Session
				sessionLength={sessionLength}
				decrementSessionLengMinute={decrementSessionLengMinute}
				incrementSessionLengthMinute={incrementSessionLengthMinute}
			/>
		</div>
	);
}

export default App;
