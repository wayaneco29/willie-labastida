import React, { Component } from 'react';

import { auth, createUserProfile } from './components/firebase/firebase.util';

import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  authAlwaysLogin = null;
  componentDidMount() {
    this.authAlwaysLogin = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        alert(`Welcome ${user.displayName}`)
      } else {
        this.setState({ currentUser: user })
      }
    })
  }

  componentWillUnmount() {
    this.authAlwaysLogin();
  }

  render() {
    return (
      <React.Fragment>
        <Header {...this.state} />
        <Homepage />
      </React.Fragment>
    )
  }
}


export default App;
