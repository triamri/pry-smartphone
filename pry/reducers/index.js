const DEFAULT_STATE = { 
  onLogin: false, 
  nav: null
};

const getLogin = (state= DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ISLOGIN' :
      return { ...state, onLogin: true };
    case 'NAVIGATION' :
    return { ...state, nav: action.payload.nav };
    default :
      return state;
  }
}

export default getLogin;