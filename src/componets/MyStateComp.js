import React, { Component } from 'react'

class MyStateComp extends Component {

    constructor(){
        super();
        this.state={
            empId:101,
            empName:"Panchashil",
        }
        setTimeout(()=>{
         this.setState({empId:this.state.empId+1,empName:"Panchashil Wankhede"})   
        },2000)
    }
    render() {
        // destructuring of state
        const {empId,empName} = this.state;
        return (
            <div>
                <h2>This is MyState Class Component</h2>
                {/* <p>Id: <strong>{this.state.empId}</strong></p>
                <p>Name: <strong>{this.state.empName}</strong></p> */}
                <p>Id: <strong>{empId}</strong></p>
                <p>Name: <strong>{empName}</strong></p>
            </div>
        )
    }
}

export default MyStateComp
