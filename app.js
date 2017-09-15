var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');
var Examples = require('./components/Examples');


ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={Main}>
        <Route path="About" component={About}/>
	<Route path="Examples" component={Examples}/>
	<IndexRoute component={Weather}/>
     </Route>
	
  </Router>,
  document.getElementById('hello-world')
);
