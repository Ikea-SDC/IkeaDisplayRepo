import React from 'react';
import style from '../styles/mainDisplay.css';

let MainDisplay = (props) => (
  <div>
    {/* {console.log(props.display[0].imageUrl)} */}
  <img src={props.display.imageUrl} height="500" width="500"/>
    Hi
  </div>
)

export default MainDisplay;