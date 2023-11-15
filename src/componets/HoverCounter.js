import React, { Component, Fragment } from 'react'
import Hoc from './Hoc'

class HoverCounter extends Component {
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
            <Fragment>
                <h2>This is Hover Counter Component</h2>
                <p>Counter Value is :<strong>{this.props.count}</strong> </p>
                <h2 onMouseOver={this.props.counterIncrement}>Hover on me to increment counter</h2>
            </Fragment>
        )
    }
}

export default Hoc(HoverCounter,3)
