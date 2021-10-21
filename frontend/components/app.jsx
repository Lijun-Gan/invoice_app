import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Homepage from './homepage';

const App =()=>(
    <div>
        <header>
            <h1>Invoice</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
    </div>
)

export default App;