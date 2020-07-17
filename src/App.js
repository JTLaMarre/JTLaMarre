import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/pages/home';
import Portfolio from './components/pages/portfolio.js';
import Contact from './components/pages/contact';
import Error from './components/pages/error';
import Navigation from './components/pages/navigation';
 
class App extends Component {
  render() {
    return ([      
      
       <BrowserRouter basename={process.env.PUBLIC_URL} >
        <div>
          <Navigation />
            <Switch>
             <Route path="/github.com/jtlamarre.github.io" component={Home} exact/>
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

