import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';
import connect from 'redux-connect-decorator'
import Home from './components/home'
import ContactUs from './components/contact'
import AppNotFound from './components/notFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

@connect((store) => {
  return {
    sent: store.user.sent,
  };
})

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, resume } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/contact'>
            <ContactUs/>
          </Route>
          <Route component={AppNotFound}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
