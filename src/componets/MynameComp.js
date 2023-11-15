import React, { Component } from 'react'
import MyPureComp from './MyPureComp'
import ReactMemoCom from './ReactMemoCom'

class MynameComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Panchashil",
             count:0
        }
    }
    changeStateData = ()=>{
        this.setState((prevState)=>({count:prevState.count+1,name:"Panchashil Wankhede"}))
    }
    render() {
        const {name,count} = this.state;
        console.log("MyName Component render");
        return (
            <div>
                <h2>This is MyName Component</h2>
                <p>Count Value is :<strong>{count}</strong></p>
                <p>My Name is :<strong>{name}</strong></p>
                <button type='button' className='btn btn-primary' onClick={this.changeStateData}>change State Value</button>
                <hr />
                <MyPureComp name={name}></MyPureComp>
                <ReactMemoCom name={name}></ReactMemoCom>
            </div>
        )
    }
}

export default MynameComp
