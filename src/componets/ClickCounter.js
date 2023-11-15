import React, { Component } from 'react'
import Hoc from './Hoc'

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }

    // counterIncrement=()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}));
    // }
    
    render() {
        return (
            <React.Fragment>
                <h2>This is Click Counter Component</h2>
                <p>Counter Value is :<strong>{this.props.count}</strong> </p>
                <button type='button' className='btn btn-outline-success' onClick={this.props.counterIncrement}>Count ++</button>
            </React.Fragment>
        )
    }
}

export default Hoc(ClickCounter,2) 
