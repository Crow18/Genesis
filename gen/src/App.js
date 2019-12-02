import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from '../src/component/navbar';
import Landing from './layouts/Landing';
import Website from './component/Website';
import Webapp from './component/Webapp';
import MisApp from './component/MisApp';

import '../src/style/App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact strict component={() => <Landing/> }/>
        <Route path='/website'exact component={() => <Website/> }/>
        <Route path='/webapp' exact component={() => <Webapp/> }/>
        <Route path='/manage-system' exact component={() => <MisApp/> }/>
      </Switch>
    </>
  );
}

export default App;
