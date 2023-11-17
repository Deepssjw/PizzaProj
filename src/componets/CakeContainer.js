import React, { Component } from 'react'
import { connect } from 'react-redux';
import { buy_cake } from './redux';
 class CakeContainer extends Component {
    render() {
        return (
            <div>
                <h2>This is My CakeContainer Component</h2>
                <p>Cake Availabel: <strong>{this.props.numberOfCakes}</strong></p>
                <button type='button' className='btn btn-primary' onClick={this.props.buy_cake}>Buy Cake </button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
  return{
    numberOfCakes:state.numberOfCakes
  }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        buy_cake:()=>{dispatch(buy_cake())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
