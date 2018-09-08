import React from 'react';
import style from '../styles/description.css';

let Description = (props) =>(
  <div className={style.layout}>
  {console.log('in description', props.description)}
  <h1>{props.description.type}</h1>
  <div>{props.description.title}</div>
  <div className={style.price}>{props.description.price}</div>
  <div>Article Number: {props.description.articleNumber}</div>
  <div>{props.description.starRating}</div>
  <div>{props.description.reviewCount} Reviews</div>
  <div>{props.description.description}</div>
  <div>Quantity: <input type="text" value="1"></input></div>
  <div>
  <button className={style.button1}>
  <img width="23px" height="23px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-bag.svg"></img>
  Available online</button>
  </div>
  <div>
  <button className={style.button2}>
  <img width="23px" height="23px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-list.svg"></img>
  Add to shopping list</button>
  </div>
  <div>
  <button className={style.button3}>Add to registry</button>
  </div>
  </div>
)

export default Description;