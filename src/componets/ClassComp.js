import React ,{ Component }from "react";

class ClassComp extends Component{

    render(){
        // destructuring props 
        const {myName,post} = this.props;
        return (<div>
            <h2>This is Class Componets</h2>
            {/* <p>My Name is : <strong>{this.props.myName}</strong>, I am :<strong>{this.props.post}</strong></p> */}
            <p>My Name is : <strong>{myName}</strong>, I am :<strong>{post}</strong></p>
        </div>)
    }

}

export default ClassComp;