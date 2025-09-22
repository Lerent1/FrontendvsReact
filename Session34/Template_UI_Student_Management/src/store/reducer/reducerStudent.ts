import type { Action } from "../../utils/types"; 

const initialState = [
    {
        id: 1,
        name: "Nguyen Tuan Minh",
        age: 19,
        gender: "Nam",
        birthday: "16/07/2006",
        hometown: "Lao Cai",
        address: "Bac Cuong"
    },
    {
        id: 2,
        name: "Tuan Minh",
        age: 19,
        gender: "Nam",
        birthday: "16/07/2006",
        hometown: "Lao Cai",
        address: "Bac Cuong"
    },
    {
        id: 3,
        name: "Nguyen Minh",
        age: 19,
        gender: "Nam",
        birthday: "16/07/2006",
        hometown: "Lao Cai",
        address: "Bac Cuong"
    }
]

export const reducerStudent = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "UPDATE":
            return state.map((s) =>
                s.id === action.payload.id ? { ...s, ...action.payload } : s
            );
        case "DELETE":
            return state.filter((s) => s.id !== action.payload);
        default:
            return state;
    }
}