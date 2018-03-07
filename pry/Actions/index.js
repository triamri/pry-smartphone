export const getLogin = () => {
  return {
    type: 'ISLOGIN'
  }
}

export const getNav = (nav) => {
  return {
    type: 'NAVIGATION',
    payload: {
      nav 
    }
  }
}