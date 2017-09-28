var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 style={{marginLeft: '260px', color: '#64B5F6'}}>It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
