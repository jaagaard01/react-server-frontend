import React, { Component } from 'react'
import styled from 'styled-components';


import Create from './Create'
import Read from './Read'



const FullPageDiv = styled.div`
display: flex
border: 2px solid red
height: 100vh
width: 100%
padding: 5px;
flex-direction: row

`

export default class Home extends Component {
  render() {
    return (
        <FullPageDiv>
            <Read></Read>
            <Create></Create>
        </FullPageDiv>
      
    )
  }
}
