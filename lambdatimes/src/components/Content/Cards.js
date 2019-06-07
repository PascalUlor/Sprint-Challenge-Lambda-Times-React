import React, { Component } from 'react';
import pt from "prop-types";
import Card from './Card';

const Cards = props => {
  const { cards } = props;
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {cards.map((card, index)=>{
            return <Card key={index} props={card}/>
          })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  cards: pt.arrayOf(pt.object)
}