import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {SubBox} from './SubBox';

export class BoxContent extends Component {
	state = {
		sunCont:'1',
	}

	changeBoxContent = (event) =>{
		this.setState({sunCont: event.target.value});	
	}
	render(){
		var subSelectBoxContent = [];
		for(var i=0; i<=this.state.sunCont-1;i++){
			subSelectBoxContent.push(i);
		}
		return(
			<div className="column">
              <div className="notification is-danger">
              	<h3>Column</h3>
              	<hr />
				<p className="control">
		            <span>Select Number </span>
		            <span className="select">
		              <select onChange={this.changeBoxContent}>
		                <option value="1" defaultValue>1</option>
		                <option value="2">2</option>
		                <option value="3">3</option>
		                <option value="4">4</option>
		              </select>
		            </span>
		        </p>
		        <div className="columns">
		            {
	          	  	 	subSelectBoxContent.map(function(i) {
	          	  	 		return <SubBox index={i} key={i} />;
	          	  	 	})
	          	  	 }
          	  	</div>
              </div>
            </div>
		);
	}
}
