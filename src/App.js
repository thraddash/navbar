import React from 'react';
//import './App.css';
import MenuDrawer from './components/appMenu/MenuDrawer';
import { BrowserRouter as Router } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* import Home from './pages/Home';
import Edit from './pages/Edit';
import Upload from './pages/Upload'; */


function App() {
  return (
    <>
      <Router>
        <MenuDrawer>
        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/edit' component={Edit} />
          <Route path='/upload' component={Upload} />
        </Switch> */}
        </MenuDrawer>
      </Router>
    </>
  );
}

export default App;