import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

class App extends React.Component {
    state = {
      username: '',
      password: '',
    }
  render() {
    const { name } = this.state;
    return (
      <div>
        <HeaderComponent username={name} />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
