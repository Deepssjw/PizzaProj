import React, { Component } from 'react'

class CondRenComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:true
        }
    }
    
    render() {
        const {isLogin} = this.state;
        let msg="";
    //    if(isLogin){
    //      //return <h2>Admin Login Successfully</h2>
    //     msg="Admin Login Successfully"
    //    }else{
    //      //return <h2>User Login Successfully</h2>
    //     msg = "User Login Successfully";
    //    }
    //        2. element as variable
    //     return <h2>{msg}</h2>

    //3. use of tenary operator 
    return (!isLogin)? <h2>Admin Login Successfully</h2> : <h2>User Login Successfully</h2>
   
    //4.use short circuit 
    //return (!isLogin) && <h2>Admin Login Successfully</h2>
    }
}

export default CondRenComp
