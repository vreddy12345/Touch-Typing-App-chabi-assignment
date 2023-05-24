import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startPractice, updateInput, finishPractice } from './actions';
import { selectCurrentKey, selectInput, selectAccuracy, selectTimer } from './selectors';

const App = () => {
  const dispatch = useDispatch();
  const currentKey = useSelector(selectCurrentKey);
  const input = useSelector(selectInput);
  const accuracy = useSelector(selectAccuracy);
  const timer = useSelector(selectTimer);
  const [countdown, setCountdown] = useState(5 * 60); // 5 minutes

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      dispatch(finishPractice());
    }
  }, [timer, dispatch]);

  const handleKeyPress = event => {
    dispatch(updateInput(event.key));
  };

  const handleStartPractice = () => {
    dispatch(startPractice());
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <h1>Touch Typing Practice</h1>
      {timer === null && (
        <button onClick={handleStartPractice}>Start Practice</button>
      )}
      {timer !== null && (
        <>
          <p>Time Remaining: {formatTime(countdown)}</p>
          <p>Keys Typed: {input.length}</p>
          <p>Accuracy: {accuracy}%</p>
          <div>
            <p>Type the following key: <strong>{currentKey}</strong></p>
            <input type="text" autoFocus={true} onKeyDown={handleKeyPress} value={input} readOnly />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
