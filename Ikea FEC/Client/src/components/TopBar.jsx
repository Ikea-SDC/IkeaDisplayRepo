import React from 'react';
import style from '../styles/topbar.css';


let TopBar = (props) =>(
  <div className={style.bar}>
  <img width="90px" height="33px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/newHeader/images/logoIKEA.svg"></img>

  <div>Products</div>
  <div>Inspiration</div>
  <div>New</div>
  <div>Offers</div>
  <div>Services</div>
  <div>Back to College</div>
  <input type="text"></input>
  <div className={style.icons}>
  <img width="30px" height="30px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-list.svg"></img>
  <img width="31px" height="31px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-bag.svg"></img>
  </div>
  </div>
)

export default TopBar;