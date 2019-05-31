import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tracker: [],
      id: props.id
    };
  }

  

  handleSubmit = async event => {
    console.log(this.props)
    await axios
      .delete(`http://localhost:4000/Delete/${this.state.id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      
      if(this.props.onDeleted)
        this.props.onDeleted()

    };
    
      

  
  

  


  render() {
    return (
      <div style={{ padding: 5 }}>
        <Button
          type="submit"
          className="text-right"
          onClick={e => this.handleSubmit(e)}
        >
          Delete
        </Button>
      </div>
    );
  }
}
