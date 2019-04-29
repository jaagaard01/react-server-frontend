import React, { Component } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const DivForm = styled.div `
border: 1px solid black
display:flex;
width: 50%
height: 40%
padding: 10px

`

const FullScreenDiv = styled.div `

height: 100%
width: 100%
display: flex
`

export default class Edit extends Component {

  constructor(props) {
    super(props)
    this.state={
     Tracker: [],
     pathname: this.props.location.pathname,
     TrackerOriginal: [],
    }
  }

  componentDidMount(){
    const id = this.state.pathname.slice(6,)
    console.log(id)
    axios.get(`http://localhost:4000/Edit/${id}`)
    .then(response => {
      this.setState({Tracker: response.data})
      this.setState({TrackerOriginal: response.data})
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  handleInputChange = async (event) => {
    event.preventDefault()
    await this.setState({
     Tracker:{ [event.target.name]: event.target.value
    }})
    console.log(this.state.Tracker)

    const newTracker = this.state.Tracker
    console.log(newTracker)

    const updatedTracker = Object.assign(this.state.TrackerOriginal, newTracker)
    this.setState({Tracker: updatedTracker})
    
 }

 handleSubmit = async (event) => {
  const id = this.state.pathname.slice(6,)
   event.preventDefault()
  await axios.put(`http://localhost:4000/Edit/${id}`, this.state.Tracker)
   .then(res => {
    console.log(res);
    console.log(res.data)
  }).catch(error => {
    console.log(error)
});
  this.props.history.push('/')
 }

  render() {
    return (
      <FullScreenDiv style={{flexDirection: "column", justifyContent: 'center', alignItems:'center', }}>
      <h2 style={{marginTop: 50}}>Update your Workout</h2>
      <DivForm style={{marginTop: 150}} >
        <form onSubmit={this.handleSubmit} class="form-row">
            <div class="form-group col-md-6" >
            <label for="exercise">Excerise</label>
            <input type="text" class="form-control" name="exercise"  onChange={this.handleInputChange} placeholder="Exercise" value={this.state.Tracker.exercise}></input>
            </div>
            <div class="form-group col-md-6">
            <label for="BodyType">Body Part</label>
            <select class="custom-select" name="bodytype" onChange={this.handleInputChange} value={this.state.Tracker.bodytype}>
              <option selected>Select</option>
              <option value="Chest">Chest</option>
              <option value="Legs">Legs</option>
              <option value="Back">Back</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Abs">Abs</option>
              <option value="Arms">Arms</option>
          </select>
          </div>
        <div class="form-group col-md-3">
          <label for="date">Date</label>
            <input type="Date" name="date" class="form-control" onChange={this.handleInputChange} value={this.state.Tracker.date} ></input>
        </div>
        <div class="form-group col-md-3">
          <label for="Weight">Weight</label>
            <input type="Number" name="weight" class="form-control" onChange={this.handleInputChange} placeholder="Weight" value={this.state.Tracker.weight}></input>
        </div>
        <div class="form-group col-md-3"> 
          <label for="Reps">Reps</label>
            <input type="Number" name="reps"class="form-control" onChange={this.handleInputChange} placeholder="Reps" value={this.state.Tracker.reps}></input>
        </div>
        <div class="form-group col-md-3"> 
            <label for="Sets">Sets</label>
            <input type="Number" name="sets"class="form-control" onChange={this.handleInputChange} placeholder="Sets" value={this.state.Tracker.sets}></input>
         </div>
            <div class="text-center">
            <Button type="submit" className="text-right" onClick={(e) => this.handleSubmit(e)}>Update your Workout</Button>
            </div>
            <div class= 'form-group col-md-3'>
            <Link to={`/`} className="btn btn-warning">Cancel</Link>
            </div>
        </form>
      </DivForm>
      </FullScreenDiv>
    )
  }
}
