import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import styled from 'styled-components';
import axios from "axios"


const DivForm = styled.div `
border: 1px solid black
display:flex;
width: 60%
height: 30%
padding: 10px


`

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state={
          exercise: '',
          date: '',
          weight: '',
          reps: '',
          bodytype: '',
          sets: '',
    
        }
      }


      handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })

     }
    
          handleSubmit = (event) => {
            event.preventDefault();
          

            axios.post("http://localhost:4000/Create", this.state)
            .then(res => {
              console.log(res);
              console.log(res.data)
            });

            
          } 
    
         
        

  render() {
    console.log(this.state)
    return (
        <DivForm>
        <form onSubmit={this.handleSubmit} class="form-row">
            <div class="form-group col-md-6" >
            <label for="exercise">Excerise</label>
            <input type="text" class="form-control" name="exercise"  onChange={this.handleInputChange} placeholder="Exercise"></input>
            </div>
            <div class="form-group col-md-6">
            <label for="BodyType">Body Part</label>
            <select class="custom-select" name="bodytype" onChange={this.handleInputChange}>
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
            <input type="Date" name="date" class="form-control" onChange={this.handleInputChange}></input>
        </div>
        <div class="form-group col-md-3">
          <label for="Weight">Weight</label>
            <input type="Number" name="weight" class="form-control" onChange={this.handleInputChange} placeholder="Weight"></input>
        </div>
        <div class="form-group col-md-3"> 
          <label for="Reps">Reps</label>
            <input type="Number" name="reps"class="form-control" onChange={this.handleInputChange} placeholder="Reps"></input>
        </div>
        <div class="form-group col-md-3"> 
            <label for="Sets">Sets</label>
            <input type="Number" name="sets"class="form-control" onChange={this.handleInputChange} placeholder="Sets"></input>
         </div>
            <div class="text-center">
            <Button type="submit" className="text-right" onClick={(e) => this.handleSubmit(e)}>Add Your Workout!</Button>
            </div>
        </form>
      </DivForm>
    )
  }
}
