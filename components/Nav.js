var React = require('react');
var {Link, IndexLink} = require('react-router');
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

var Nav = () => {
  return (
	   <AppBar
            title="React Weather" style={{backgroundColor: '#dcdcdc', width: '900px'}}
           >

           <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', position: 'relative', left: '-200px', fontWeight: 'bold', margin: '10px', width: '350px'}}>


             <div style={{marginTop: '12px', marginLeft: '8px'}}>
                   <IndexLink to="/" activeClassName="active" >Get Weather</IndexLink>
	     </div>

             <div  style={{marginTop: '12px', marginLeft: '8px'}}>
		  <Link to="/about" activeClassName="active"  >About</Link>
	     </div>
             
             <div style={{marginTop: '12px', marginLeft: '8px'}}>
                   <Link to="/examples" activeClassName="active" >Examples</Link>	
     	      </div>

	  </div>
           <div style={{fontSize: '10px', marginTop: '20px', color: '#3949AB', fontWeight: 'bold'}}>
     	       <p>by John MWasenga</p>
		
	   </div> 




          </AppBar>
  );
};

module.exports = Nav;
