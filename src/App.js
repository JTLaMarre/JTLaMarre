import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio.js';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Navigation from './components/pages/Navigation';
 
class App extends Component {
  render() {
    return ([      
      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/portfolio" component={Portfolio}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>,

    ]
    );
  }
}
 
export default App;

