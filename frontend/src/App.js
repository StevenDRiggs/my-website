import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

import Portfolio from './containers/Portfolio'
import About from './components/About'
import Blog from './containers/Blog'
import Resumes from './components/Resumes'
import Contact from './forms/Contact'
import Home from './components/Home'
import Login from './forms/Login'
import NavBar from './containers/NavBar'

import { ReactComponent as Logo } from './images/logo.svg'

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

  handleSecretDivClick = event => {
    switch (event.target.id) {
      case 'first':
        this.setState({
          first: !this.state.first,
          second: false,
          third: false,
        })
        break

      case 'second':
        if (this.state.first) {
          this.setState({
            ...this.state,
            second: !this.state.second,
            third: false,
          })
        } else {
          console.log('what?')
          this.setState({
            ...initialState,
          })
        }
        break

      case 'third':
        if (this.state.first && this.state.second) {
          this.setState({
            ...this.state,
            third: !this.state.third,
          })
        } else {
          this.setState({
            ...initialState,
          })
        }
        break

      default:
        this.setState({
          ...initialState,
        })
    }
  }

  render() {
    const { first, second, third } = this.state

    return (
      <div id="app">
        <div className='secret-div'>
          <div className={`secret-div-${first}`} onClick={this.handleSecretDivClick} id='first'></div>
          <div className={`secret-div-${second}`} onClick={this.handleSecretDivClick} id='second'></div>
          <div className={`secret-div-${third}`} onClick={this.handleSecretDivClick} id='third'></div>
        </div>
        <Router>
          <NavBar />
          <Link to='/'>
            <Logo id='logo' alt='Chrysalis Logo' />
          </Link>
          {first && second && third
            ?
              <Login />
            :
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/about' component={About} />
                <Route path={['/blog', '/wtf']} component={Blog} />
                <Route path={['/resume', '/resumes']} component={Resumes} />
                <Route path='/contact' component={Contact} />
              </Switch>
          }
        </Router>
      </div>
    );
  }
}


export default App;
