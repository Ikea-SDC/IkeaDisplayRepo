import React from 'react';
import style from '../styles/description.css';
import Star from 'react-star-rating-component';

let Description = (props) =>(
  <div className={style.layout}>
  {console.log('in description', props.description)}
  <h1>{props.description.type}</h1>
  <div>{props.description.title}</div>
  <div className={style.price}>{props.description.price}</div>
  <div className={style.article}>Article Number: {props.description.articleNumber}</div>
  <div className={style.reviewLayout}>
  <div className={style.star}>
    <Star
    name='star1'
    starCount={5}
    value={props.description.starRating}
    starColor={'#ffcc00'}
    emptyStarColor={'#cdcdcd'}
  />
  </div>
  <div className={style.review1}>
  {props.description.starRating}
  </div>
  <div className={style.review}>
  ({props.description.reviewCount})
  Reviews
  </div>
  </div>
  <div>{props.description.description}</div>
  <div>Quantity: <input type="text"></input></div>
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