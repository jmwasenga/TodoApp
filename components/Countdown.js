var React = require('react');
var Clock = require('./Clock');


var Countdown = React.createClass({
   render: function () {
     return (
        <div style={{display: 'flex', flexDirection: 'row'
  	   
        }}>
           <Clock totalSeconds={30000} />
           
        </div>
  )   
}
});




module.exports = Countdown;
