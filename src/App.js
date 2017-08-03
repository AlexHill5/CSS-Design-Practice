import React, { Component } from 'react';
import './App.css';
import router from './router.js'
import Header from './Header/Header'
import TopPanel from './Header/TopPanel/TopPanel'
import Footer from './Footer/Footer'


class App extends Component {
  render() {
    return (
      <div>
        <TopPanel/>
        <Header />
      { router }
      <Footer/>
      </div>
    );
  }
}

export default App;
