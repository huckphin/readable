import React, { Component } from 'react';
import './App.css';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import TopAppBar from './components/TopAppBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopAppBar />
        <Container>
          <Button color="primary">button</Button>
        </Container>
      </div>
    );
  }
}

export default App;
