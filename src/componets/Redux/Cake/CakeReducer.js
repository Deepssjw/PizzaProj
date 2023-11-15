import { BUY_CAKE } from "./CakeType"

const initialState ={
    numberofCake:20
}

const CakeReducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numberofCake:state.numberofCake-1
        }
        default:return state
    }
}