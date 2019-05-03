import React, { Component } from 'react'
import styled from 'styled-components';
import axios from "axios"
import Delete from './Delete'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Create from './Create'



const HistoryDiv = styled.div `
display: flex
width: 100%
height: 100%
padding: 20
`

const Contentdiv = styled.div `
width: 65%


`


const ButtonDiv = styled.div `
width: 100%
margin-left: 250px
display: flex

`

export default class Read extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      Tracker: []};
    }

   getData(){
      axios.get("http://localhost:4000/")
      .then (response => {
        this.setState({
          Tracker: response.data
    })
  })
  .catch(error => this.setState({ error, isLoading: false }));

}
    componentDidMount() {
      this.getData()
    }


  render() {
    
    return (
        <HistoryDiv style={{}}>
        <Contentdiv>
        <ButtonDiv style={{justifyContent: 'space-between', paddingBottom: 30, paddingTop: 30,}}><h3>Workout History </h3> <Create style={{paddingBottom: 70}}></Create></ButtonDiv>
        
        <Table striped bordered hover size="sm" style={{marginLeft: 250}}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Exercise</th>
              <th>Body Type</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Sets</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
            {this.state.Tracker.map((Tracker, index) => (
                <tr key={index}>
                  <td><Link to={`/Edit/${Tracker._id}`} value={Tracker._id} onClick={(e)=>this.getLog(e.target.value)}>{Tracker.exercise}</Link></td>
                  <td >{Tracker.date}</td>
                  <td >{Tracker.bodytype}</td>
                  <td >{Tracker.weight}</td>
                  <td >{Tracker.reps}</td>
                  <td >{Tracker.sets}</td>
                  <td><Delete/></td>
                </tr> 
                ))}
            </tbody> 
        </Table>
        </Contentdiv>
      </HistoryDiv>
    )
  }
}
