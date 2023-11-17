import { BUY_CAKE,RETURN_CAKE } from "./cakeType";

export const buy_cake = ()=>{
    return {
        type:BUY_CAKE
    }
}
export const return_cake = ()=>{
    return {
        type:RETURN_CAKE
    }
}