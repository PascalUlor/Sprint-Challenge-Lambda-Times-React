import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import Modal from './components/Login/Modal';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Carousel />
      <Content />
      <Modal />
    </div>
  );
}

export default App;
