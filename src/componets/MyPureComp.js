import React, { Component, PureComponent } from 'react'

 class MyPureComp extends PureComponent {
    
    render() {
        return (
            <div>
                {console.log("My PureComponent render")}
                <h2>This is MyPure Component</h2>
                {/* <p>Count Value is :<strong>{this.props.count}</strong></p> */}
                <p>My Name is :<strong>{this.props.name}</strong></p>
            </div>
        )
    }
}

export default MyPureComp
