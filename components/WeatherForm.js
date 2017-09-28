var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '100px'}}>
          <form onSubmit={this.onFormSubmit}>
            <div style={{}}>
    	       <input type="text" ref="location"/>
   	    </div>

	    <div>
                <button style={{margin: '10px', backgroundColor: 'white', border: '1px solid #64B5F6', width: '174px',marginLeft: '0px', borderRadius: '7px', color: '#64B5F6'}}>Get Weather</button>
            </div>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
