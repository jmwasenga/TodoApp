var React = require('react');
var {Link, IndexLink} = require('react-router');
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

var Nav = () => {
  return (
	   <AppBar 
             style={{backgroundColor: '#dcdcdc', width: '900px'}}
           >

           <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', position: 'relative', left: '-200px', fontWeight: 'bold', margin: '10px', width: '350px'}}>
            <div style={{ position: 'absolute', left: '-130px', marginTop: '12px', color: 'white'}}>ReactTimer</div>

             <div style={{marginTop: '12px', marginLeft: '-40px'}}>
                   <IndexLink to="/" activeClassName="active" >Timer</IndexLink>
	     </div>

             <div  style={{marginTop: '12px', marginLeft: '8px'}}>
		  <Link to="/Countdown" activeClassName="active"  >Countdown</Link>
	     </div>
             
            

	  </div>
           <div style={{fontSize: '10px', marginTop: '20px', color: '#3949AB', fontWeight: 'bold'}}>
     	       <p><span style={{color: 'white'}}>Created by</span> John MWasenga</p>
		
	   </div> 




          </AppBar>
  );
};

module.exports = Nav;
