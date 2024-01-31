import React from 'react'
import { FaPlus , FaMinus } from "react-icons/fa";
import { increment , decrement } from './states/breakState/break';
import "./Break.css"
import { useDispatch, useSelector } from 'react-redux';
function Break() {
  const play = useSelector((state) => state.play.value);
   const break_ = useSelector((state) => state.break.value);
   const dispatch = useDispatch(); 
   const handleIncrement = () => {
    if (play === false ){
      if(!(break_ >= 60)){
        dispatch(increment());
      }
    }
    
   
  }; 
const handleDecrement = () => {
  if(play === false){

  
    if (break_ > 1) {
      dispatch(decrement()); 
    }
  }
  };
  return (
<div id="break">  
    
    <p id="break-label">Break</p>
    <p id="break-length">{break_}</p>
    <div id="plus-minus">
    <button id="break-increment" onClick={ handleIncrement}><FaPlus disabled={play}  style={{ fontSize: '50px', cursor: 'pointer', marginLeft: "20px", marginRight: "20px"}} ></FaPlus></button>
    <button id="break-decrement"  onClick={handleDecrement}><FaMinus disabled={play}   style={{ fontSize: '50px', cursor: 'pointer',  marginLeft: "20px", marginRight: "20px" }}></FaMinus></button>
    </div>
</div>
  )
}

export default Break