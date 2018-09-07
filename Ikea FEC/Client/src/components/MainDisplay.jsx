import React from 'react';

let MainDisplay = (props) => (
  <div>
    {/* {console.log(props.display[0].imageUrl)} */}
  <img src={props.display[0].imageUrl} height="500" width="500"/>
    Hi
  </div>
)

export default MainDisplay;