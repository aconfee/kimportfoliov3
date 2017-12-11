import React, { Component } from 'react';
import './instagramFeed.component.css';
import axios from 'axios';

class InstagramFeed extends Component {

  constructor(props) {
    super(props);

    this.state = { imageUrls: [] };
  }

  componentWillMount = () => {
    axios.get("/api/feed")
      .then(response => {
        console.log("got response");
        console.log(response.data.response);
        this.setState({ imageUrls: response.data.response });
      })
      .catch(error => {
        console.error(error);
    });
  };

  renderImages = () => {
    return this.state.imageUrls.map( (url, index) => {
      return (
        <div className="instagram-image">
          <img key={ index } src={ url } title="Instagram post." alt="Recent Instagram post."/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="instagram-feed">
        <div>
          <img className="instagram-header" src="./images/instagram-logo-header.jpg" title="Instagram header" alt="Instagram header."/>
        </div>
        { this.renderImages() }
      </div>
    );
  };
};

export default InstagramFeed;
