import React, { Component } from 'react'
import {Button, Modal,} from 'react-bootstrap'
import styled from 'styled-components';
import axios from "axios"


const DivForm = styled.div `
display:flex;
width: 100%;
height: 100%;
padding: 5px;

`

export default class Create extends Component {
    constructor(props, context) {
        super(props, context)
      
      
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

        this.state={
          exercise: '',
          date: '',
          weight: '',
          reps: '',
          bodytype: '',
          sets: '',
          show: false
    
        }
      }
      
      

      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }




      handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })

     }
    
          handleSubmit = (event) => {
            axios.post("http://localhost:4000/Create", this.state)
            .then(res => {
              console.log(res);
              console.log(res.data)
            });

            
          } 
    
  modalSubmit = () => {
    this.handleSubmit();
    this.handleClose(); 
  }
        

  render() {
    console.log(this.state)
    return (
        <div>
          <Button variant="primary" onClick={this.handleShow} style={{display: "flex"}}>
          Add Your Workout
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title>Create New Workout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <DivForm>
        <form class="form-row">
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
            <Button type="submit" className="text-right" onClick={(e) => this.modalSubmit(e)}>Add Your Workout!</Button>
            </div>
        </form>
      </DivForm>
      </Modal.Body>
      </Modal>
      </div>
    )
  }
}
