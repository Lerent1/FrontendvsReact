const initialState = {
    count: 0,
    users: [
        {
            id: 1,
            name: "Minh"
        },
        {
            id: 2,
            name: "TMinh"
        }
    ]
}

export const reducerCounter: any = (state = initialState, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return (state.count += 1);
    }
}