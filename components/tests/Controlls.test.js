var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var $ = require('jquery');
var Controlls = require('../Controlls');




describe('Controlls', () => {
  it('it should existst', () => {
     expect(Controlls).toExist();

   });

    describe('render', () => {
      it('it should render pause when started', () => {
	 var controlls = TestUtils.renderIntoDocument(<Controlls countdownStatus="paused"/>);           
         var $el = $(ReactDOM.findDOMNode(controlls));

	 // The variable $pauseButton will contain 1 if one button found or 2 if two buttons found
         var $pauseButton = $el.find('button:contains(Start)');
	
         
         expect($pauseButton.length).toBe(1);



       });


       it('it should render Start when paused', () => {
	 var controlls = TestUtils.renderIntoDocument(<Controlls countdownStatus="started"/>);           
         var $el = $(ReactDOM.findDOMNode(controlls));

	 // The variable $pauseButton will contain 1 if one button found or 2 if two buttons found
         var $pauseButton = $el.find('button:contains(Pause)');
	
         
         expect($pauseButton.length).toBe(1);



       });
 
    });

});
