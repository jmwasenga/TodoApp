var React = require('react');
var Nav = require('./Nav');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



var Main = (props) => {
  return (
   <MuiThemeProvider>
    <div>
      <Nav/>
        <h3> This main Component</h3>
        {props.children}
    </div>
   </MuiThemeProvider>
  );
}

module.exports = Main;
