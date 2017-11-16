import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import HomePage from './components/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <img src="/images/logo.png" />
      <HomePage />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));