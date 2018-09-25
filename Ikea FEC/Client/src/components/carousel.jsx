import React from 'react';
import List from './List.jsx';
import style from '../styles/carousel.css';

let Carousel = (props) =>(
<div className={style.layout}>
  {props.pics.additionalUrl.map((picture, i)=> <List key={i} picture={picture}/>)}
</div>
)

export default Carousel;