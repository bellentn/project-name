import React, { Component } from 'react';

export class Item extends Component 
{
    state = {
        count: 1
    }

    update = (event) =>
    {
        this.setState({count: event.target.value})
    }


    render() 
    {
        var list = [];
        for(var i = 0; i < this.state.count; i++)
        {
            list.push(<div className="column notification is-primary has-text-centered App-body">No. {(i+1)}</div>);
        }
        return (
            <div className="column">
                <div className="select">
                    <select onChange={this.update}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    </select>
                </div>

                <div className="columns App-body">
                    {list}
                </div>
               
            </div>
        );
    }
}