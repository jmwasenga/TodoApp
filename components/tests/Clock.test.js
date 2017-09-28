var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');


var Clock = require('../Clock');


describe('Clock', () => {
   it('Should exist', () =>{
      expect(Clock).toExist();

   });
describe('format seconds', () => {
  it('It should format seconds', () =>{
    var clock = TestUtils.renderIntoDocument(<Clock />);
    var seconds = 615;
    var expected = '10:15';
    var actual = clock.formatSeconds(seconds);


    expect(actual).toBe(expected);
   });

});

describe('render', () => {
  it('should render clock to output', () =>{
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={601}/>);
    var $el = $(ReactDOM.findDOMNode(clock));
    var actualText = $el.find('span').text();

    expect(actualText).toBe('10:01');

   });

});


describe('format seconds less than 10', () => {
  it('It should format seconds and minutes less than 10 ', () =>{
    var clock = TestUtils.renderIntoDocument(<Clock />);
    var seconds = 61;
    var expected = '01:01';
    var actual = clock.formatSeconds(seconds);


    expect(actual).toBe(expected);
   });

});

});
