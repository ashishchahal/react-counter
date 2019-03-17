import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count : 0,
            city: this.props.city
        }
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){
        this.setState({
            count: this.state.count+1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count-1
        })
    }

    reset(){
        this.setState({
            count: 0,
            
        })
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                <button className="btn btn-danger" onClick={this.decrement}>Decrement</button>
                <button className="btn btn-default" onClick={this.reset}>Reset</button>
                <p>The count is :</p><h2>{this.state.count}</h2>
                <p>The city is: </p><h3>{this.props.city}</h3>
            </div>
        );
    }
}

export default Counter;