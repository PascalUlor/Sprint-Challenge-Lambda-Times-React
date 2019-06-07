import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selected: 0
    };
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    if (this.state.selected === 0) {
      this.setState(st => ({
        selected: 3
      }));
    } else {
      this.setState(st => ({
        selected: st.selected - 1
      }));
    }
    console.log(this.state.selected);
  };

  rightClick = () => {
    if (this.state.selected === 3) {
      this.setState(st => ({
        selected: 0
      }));
    } else {
      this.setState(st => ({
        selected: st.selected + 1
      }));
    }
    console.log(this.state.selected);
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.selected]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
