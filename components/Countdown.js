var React = require('react');
var Clock = require('./Clock');
var CountdownForm = require('./CountdownForm');


var Countdown = React.createClass({
   getInitialState: function () {
     return {count: 0};

  },
   handleSetCountdown: function (seconds) {
     this.setState({
	count: seconds
     });


   },
   render: function () {
     var {count} = this.state;
     return (
        <div style={{display: 'flex', flexDirection: 'column'
  	   
        }}>
            <div>
                <Clock totalSeconds={count} />
            </div>

            <div style={{marginLeft: '300px'}}>
                <CountdownForm onSetCountdown={this.handleSetCountdown}  />
            </div>

        </div>
  )   
}
});




module.exports = Countdown;
