import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tracker: [],
      id: ""
    };
  }

  handleSubmit = async event => {
    await axios
      .delete(`http://localhost:4000/delete/${this.state._id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
      await this.getData()
  };
  

  async getData() {
    return axios
      .get("http://localhost:4000/")
      .then(response => {
        this.setState({
          Tracker: response.data
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleDelete = async () => {
    this.handleSubmit();
    this.getData();
  };


  render() {
    return (
      <div style={{ padding: 5 }}>
        <Button
          type="submit"
          className="text-right"
          onClick={e => this.handleDelete(e)}
        >
          Delete
        </Button>
      </div>
    );
  }
}
