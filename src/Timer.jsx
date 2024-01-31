import React, { useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { MdLoop } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import './Timer.css';
import { unplay, playT } from './states/play';
import { restartsession } from './states/sessionState/session';
import { restart } from './states/breakState/break';
import { resetSeconds, setSeconds } from './states/secondsState/seconds';

function Timer() {
  const break_ = useSelector((state) => state.break.value);
  const session = useSelector((state) => state.session.value);
  const play = useSelector((state) => state.play.value);
  const dispatch = useDispatch();
  const seconds = useSelector((state) => state.seconds.value);

  const timerTypeRef = useRef(useSelector((state) => state.seconds.type));

  const time_format = (prop) => {
    let minutes = Math.floor(prop / 60);
    let seconds = Math.floor(prop - minutes * 60);
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return minutes + ':' + seconds;
  };

  const handlePlay = () => {
    dispatch(play ? unplay() : playT());
  };

  const handleRestart = () => {
    dispatch(unplay());
    dispatch(resetSeconds());
    dispatch(restartsession());
    dispatch(restart());
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    const audio = document.getElementById("beep");

    if (play) {
      const intervalId = setTimeout(() => {
        if (seconds > 0) {
          dispatch(setSeconds({ value: seconds - 1, type: timerTypeRef.current }));
        } else {
          clearTimeout(intervalId);
          console.log(timerTypeRef.current + "am here");
          if (timerTypeRef.current === "session") {
            timerTypeRef.current = "break";
            dispatch(setSeconds({ value: break_ * 60, type: timerTypeRef.current }));
            audio.play();
          } else {
            timerTypeRef.current = "session";
            dispatch(setSeconds({ value: session * 60, type: timerTypeRef.current }));
            audio.pause();
            audio.currentTime = 0;
          }
        }
      }, 1000);

      return () => clearTimeout(intervalId);
    }

    return () => {};
  }, [play, seconds, dispatch , break_ , session]);

  return (
    <div id="current-timer">
      <p id="timer-label">{timerTypeRef.current === "break" ? "Break" : "Session"}</p>
      <p id="time-left">{time_format(seconds)}</p>
      <div id="buttons">
        <button id="start_stop" onClick={() => handlePlay()}>
          <FaPlay style={{ fontSize: '50px', cursor: 'pointer' }} />
        </button>
        <button id="reset" onClick={() => handleRestart()}>
          <MdLoop style={{ fontSize: '50px', cursor: 'pointer' }} />
        </button>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}

export default Timer;
