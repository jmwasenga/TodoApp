var React = require('react');
var CountdownForm = React.createClass ({
  onSubmit: function (e) {
     e.preventDefault();
     var strSeconds = this.refs.seconds.value;

     if (strSeconds.match(/^[0-9]*$/)) {
         this.refs.seconds.value = '';
         this.props.onSetCountdown(parseInt(strSeconds, 10));
     }


  },
  render: function () {
     return (
       <div style={{display: 'flex', flexDirection: 'column'}}>
         <form ref="form" onSubmit={this.onSubmit} >
           <div>
	       <input style={{width: '220px', marginBottom: '10x'}}  type="text" ref="seconds" placeholder="Enter time in seconds"/>
	   </div>

           <div>
	       <button style={{width: '220px', marginTop: '6px'}}>Start</button>
           </div>

	 </form>
	</div>


     );




   }




});


module.exports = CountdownForm;
