const initialState={
    user: [
        {
            id: 1,
            name: "Nguyen Tuan Minh",
            gender: "nam",
            date: "16/07/2006",
            address: "Ha Noi"
        },
        {
            id: 2,
            name: "Nguyen Tuan Minh",
            gender: "nam",
            date: "16/07/2006",
            address: "Ha Noi"
        }
    ]
}
export const listUser = (state = initialState, action: any) => {
    return state;
}