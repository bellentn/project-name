import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {BoxContent} from './BoxContent';

export class SelectBox extends Component {

	state = {
		colSelectBox:'4',
	}
	changeSelectBox = (event) =>{
		this.setState({colSelectBox: event.target.value});	
	}
	render() {
		var selectBox = [];
		for(var i=0; i<=this.state.colSelectBox-1;i++){
			selectBox.push(i);
		}

	    return (
	    	<div className="container has-text-centered">
	          <p className="control">
	            <span>Select </span>
	            <span className="select">
	              <select onChange={this.changeSelectBox}>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4" selected>4</option>
	              </select>
	            </span>
	          </p>
	          <div className="clearfix"></div>
	          <div className="columns">
	            {
          	  	 	selectBox.map(function(i) {
          	  	 		return <BoxContent index={i} key={i} />;
          	  	 	})
          	  	 }
          	  </div>
	        </div>
	    );
  	}
}


