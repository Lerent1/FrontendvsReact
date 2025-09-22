const initialState={
    numbers: []
}
export const random =(state = initialState, action: {type: string})=>{
    if(action.type == "RANDOM"){
        return {numbers: [...state.numbers, Math.round(Math.random()*99)]};
    }
    return state;
}