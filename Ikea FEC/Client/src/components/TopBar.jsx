import React from 'react';
import styled from 'styled-components';
import style from '../styles/topbar.css';


let TopBar = (props) =>(
  <div>
  <img width="90px" height="auto" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/newHeader/images/logoIKEA.svg"></img>
  <div className={style.bar}>
  <div>Products</div>
  <div>Inspiration</div>
  <div>New</div>
  <div>Offers</div>
  <div>Services</div>
  <div>Back to College</div>
  <input type="text"></input>
  </div>
  <div className={style.icons}>
  <img width="30px" height="30px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-list.svg"></img>
  <img width="31px" hight="31px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-bag.svg"></img>
  </div>
  </div>
)

export default TopBar;