import React, { Component } from 'react';
import './App.css';
import './styles/SideDrawer.css';
import TopAppBar from './components/TopAppBar';
import SideDrawer from './components/SideDrawer';
import ContentWrapper from './components/ContentWrapper';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <SideDrawer />
        <TopAppBar />
        <ContentWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
