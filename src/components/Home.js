import React, { Component } from 'react'
import styled from 'styled-components';


import Read from './Read'



const FullPageDiv = styled.div`
display: flex;
height: 100vh;
width: 100%;
padding: 5px;
flex-direction: row;
background-image: linear-gradient(#94AFFF, white);


`

export default class Home extends Component {
  render() {
    return (
        <FullPageDiv>
            <Read />
            
        </FullPageDiv>
      
    )
  }
}
