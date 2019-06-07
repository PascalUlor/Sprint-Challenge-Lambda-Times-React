import React from 'react';
import pt from "prop-types";

const Card = ({ props }) => {
  const { headline, img, author } = props;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img /* image source goes here */}  alt="my own pi" />
        </div>
        <span>By {author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;


Card.propTypes = {
  headline: pt.string,
  img: pt.string,
  author: pt.string
}