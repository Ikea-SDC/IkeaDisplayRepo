import React from 'react';
import style from '../styles/description.css';

let Description = (props) =>(
  <div className={style.layout}>
  {console.log('in description', props.description)}
  <h1>{props.description.type}</h1>
  <div>{props.description.title}</div>
  <h1>{props.description.price}</h1>
  <div>Article Number: {props.description.articleNumber}</div>
  <div>{props.description.starRating}</div>
  <div>{props.description.reviewCount} Reviews</div>
  <div>{props.description.description}</div>
  <div>quantity<input type="text" value="1"></input></div>
  <div>
  <button>Available online</button>
  </div>
  <div>
  <button>Add to shopping list</button>
  </div>
  <div>
  <button>Add to registry</button>
  </div>
  </div>
)

export default Description;