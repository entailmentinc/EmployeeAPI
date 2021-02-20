import './App.css';
import Navbar from "./components/navbar/Navbar";
import React from 'react'
import Users from "./components/users/Users1";
import Login from "./components/login/Login";
import { connect } from "react-redux";
import AddUser from "./components/users/AddUser";
import PrivateRoute from "./components/PrivateRoute"
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import { setAuth } from './actions/login.action'

function App({ setAuth }) {
  React.useEffect(() => {
    setAuth()
  }, [])
  return (
      <Router>
        <div className="App">
        <Switch>
        <Route exact path="/"><Login/></Route>
        <Route exact path="/login"><Login/></Route>
        <Route path="/users">
              <>
              <Navbar />
                <div className="container" style={{ margin: '50px' }}>
                  <div className="py-3">
                    <PrivateRoute>
                      <Switch>
                        <Route exact path="/users"><Users/></Route>
                        <Route exact path="/users/add"><AddUser/></Route>
                      </Switch>
                    </PrivateRoute>
                  </div>
                </div>
              </>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  setAuth
})(App)
