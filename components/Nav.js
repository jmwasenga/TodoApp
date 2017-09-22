var React = require('react');
var {Link, IndexLink} = require('react-router');
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

var Nav = () => {
  return (
	   <AppBar
            title="React Weather App" style={{backgroundColor: '#dcdcdc'}}
           >

           <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', fontWeight: 'bold', margin: '10px', backgroundColor: '#dcdcdc', width: '350px'}}>


             <div style={{margin: '10px'}}>
                   <IndexLink to="/" activeClassName="active" >Get Weather</IndexLink>
	     </div>

             <div  style={{margin: '10px'}}>
		  <Link to="/about" activeClassName="active"  >About</Link>
	     </div>
             
             <div style={{margin: '10px'}}>
                   <Link to="/examples" activeClassName="active" >Examples</Link>	
     	      </div>

	  </div>




          </AppBar>
  );
};

module.exports = Nav;
