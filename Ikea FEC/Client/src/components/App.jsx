import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MainDisplay from './MainDisplay.jsx';
import TopBar from './TopBar.jsx';
import style from '../styles/app.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      temp:[{imageUrl:''}]
    }
  }

  componentDidMount(){
    axios
    .get('/api/display')
    .then((response)=>{
      console.log(response)
      this.setState({
        temp: response.data
      })
      //console.log('this is the state', this.state.temp)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){


// Create a Wrapper component that'll render a <section> tag with some styles

    return (
      <div>
      <div className={style.header}>
      <div className="head">IKEA FAMILY</div>
      <div className="head">IKEA for business</div>
      <div className="head">Customer Services</div>
      <div className="head">Financing</div>
      <div className="head">Join our email list</div>
      </div>
      <TopBar/>
      <MainDisplay display={this.state.temp}/>
      </div>
    )
    // if(this.state.temp === null){
    //   return(<div>Loading</div>)
    // } else {
    // return (<MainDisplay display={this.state.temp[0]}/>)
    // }
  }
}

export default App;