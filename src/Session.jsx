import React from 'react'
import { FaPlus , FaMinus} from "react-icons/fa";
import "./Session.css"
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment  } from './states/sessionState/session';
import { setSeconds, updateSeconds } from './states/secondsState/seconds';
function Session() {
 

  const seconds = useSelector((state) => state.seconds.value );
  const session = useSelector((state) => state.session.value);
  const dispatch = useDispatch();   
  const play = useSelector((state) => state.play.value);

  const handleIncrement = () => {
    if (play === false){
      if(!(session >= 60)){
        dispatch(increment());
        dispatch(setSeconds({value: seconds + 60,type: "session"}))
      }
    }
        
       
      }; 
  const handleDecrement = () => {
     if(play === false){
    
      if (session > 1) {
        dispatch(decrement()); 
        dispatch(setSeconds({value:  seconds - 60 , type: "session"}));
      }
     }
     
      };
     
  return (
    <div id="session"> 
        <p id="session-label">Session</p>
        
        <p id="session-length">{session}</p>
        <div id="plus-minus">
        <button id="session-increment" onClick={handleIncrement}><FaPlus    style={{ fontSize: '50px', cursor: 'pointer' }} ></FaPlus></button>
        <button id="session-decrement" onClick={handleDecrement}><FaMinus    style={{ fontSize: '50px', cursor: 'pointer' }} ></FaMinus></button>
        </div>
    </div>
  )
}

export default Session