import React, { Component } from 'react'
import styled from 'styled-components';
import axios from "axios"
import Delete from './Delete'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const HistoryDiv = styled.div `
display: flex
width: 40%
height: 100%
padding: 20
border-right: 1px solid black

`

const Contentdiv = styled.div `
width: 100%
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
        <HistoryDiv>
        <Contentdiv><h3>Workout History</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Exercise</th>
              <th>Body Type</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Sets</th>
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
                  <Delete/>
                </tr> 
                ))}
            </tbody> 
        </Table>
        </Contentdiv>
      </HistoryDiv>
    )
  }
}
