import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Portfolio from './containers/Portfolio'
import About from './components/About'
import Blog from './containers/Blog'
import Resumes from './components/Resumes'
import Contact from './forms/Contact'
import Home from './components/Home'
import Login from './forms/Login'

import './App.css';


const initialState = {
  first: false,
  second: false,
  third: false,
}


class App extends Component {
  state = {
    ...initialState,
  }

  handleSecretButtonClick = event => {
    const { first, second, third } = this.state
    switch (event.target.id) {
      case 'first':
        this.setState({
          first: !first,
          second: false,
          third: false,
        })

      case 'second':
        if (first) {
          this.setState({
            ...this.state,
            second: !second,
            third: false,
          })
        } else {
          this.setState({
            ...initialState,
          })
        }

      case 'third':
        if (first && second) {
          this.setState({
            ...this.state,
            third: !third,
          })
        } else {
          this.setState({
            ...initialState,
          })
        }
    }
  }

  render() {
    const { first, second, third } = this.state

    return (
      <div className="App">
        <button className={`secret-button-${first}`} onClick={this.handleSecretButtonClick} id='first' />
        <button className={`secret-button-${second}`} onClick={this.handleSecretButtonClick} id='second' />
        <button className={`secret-button-${third}`} onClick={this.handleSecretButtonClick} id='third' />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
            <Route path={['/blog', '/wtf']} component={Blog} />
            <Route path={['/resume', '/resumes']} component={Resumes} />
            <Route path='/contact' component={Contact} />
            {first && second && third ? <Redirect to='/' /> : null}
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
