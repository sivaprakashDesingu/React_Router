import React, { Component } from 'react';
import axios from 'axios';
import './home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    //this.onChangeHostName = this.onChangeHostName.bind(this);

    this.state = {
      name: 'siva',
      sn: 'prakash'
    }
  }

  componentDidMount() {
    const serverport = {
      name: this.state.name,
      port: this.state.sn
    }
    http://localhost:8000

    axios.post('http://localhost:8000/test', serverport)
    .then(response => {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="Home">
        <p>Home Page</p>
      </div>
    );
  }
}

export default Home;