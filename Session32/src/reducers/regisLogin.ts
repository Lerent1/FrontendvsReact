const initialState = {
  email: "",
  password: "",
  isLogin: false,
};

export const regisLogin = (state = initialState, action: any) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLogin: false,
      };
    case "LOGIN":
      if (
        state.email === action.payload.email &&
        state.password === action.payload.password
      ) {
        return { ...state, isLogin: true };
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
        return state;
      }
    default:
      return state;
  }
};
