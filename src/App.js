import React from 'react';
import {BrowserRouter, Route,} from 'react-router-dom'

import Create from './components/Create'
import Delete from './components/Delete'
import Edit from './components/Edit'
import Home from './components/Home'
import Read from'./components/Read'

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App">
          <Route exact path="/" component={Home} />
          <Route path="/Create" component={Create} />
          <Route path="/Delete" component={Delete} />
          <Route path="/Edit" component={Edit} />
          <Route path="/Read" component={Read} />
          </BrowserRouter>
    </div>
  );
}

export default App;
