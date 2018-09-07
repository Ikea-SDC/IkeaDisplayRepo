import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      temp:''
    }
  }

  componentDidMount(){
    axios
    .get('/api/display')
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){
  const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 0.6em;
  color: #000000;
`;

const T2 = styled.h1`
display: flex;
justify-content: flex-end;
font-size: 0.6em;
color: #000000;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
  const Header = styled.section`
  padding: 0.6em;
  background: #f8f8f8;
`;
    return (
      <div>
        <Header>
          <Title>
      <div className="head">IKEA FAMILY </div>
      <div className="head"> IKEA for business </div>
      <div className="head"> Customer Services </div>
      <div className="head"> Financing </div>
      <div className="head"> Join our email list </div>
        </Title>
        {/* <T2>
      <div>login/signup</div>
        </T2> */}
        
      </Header>
      </div>
    )
  }
}

export default App;