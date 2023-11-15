import React, { Component } from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             company:"Changepond"
        }
    }
    
    counterInc=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }
    render() {
        const {count,company} = this.state;
        return (
            <div>
                <h2>this is parent componets</h2>
                <p>Counter is: <strong>{count}</strong></p>
                <button type='button' className='btn btn-outline-primary' onClick={this.counterInc}>counte++</button>
                <hr/>
                <ChildComp count={count} company={company}></ChildComp>
            </div>
        )
    }
}

export default ParentComp
