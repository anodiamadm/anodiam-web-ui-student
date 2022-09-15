const AuthReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        email: action.authObj.email,
        authProvider: action.authObj.authProvider,
        given_name: action.authObj.given_name,
        family_name: action.authObj.family_name,
        JWT: action.authObj.JWT,
        expires_on: action.authObj.expires_on,
        valid: action.authObj.valid
      };
    case 'LOGOUT':
      return {
        email: action.authObj.email,
        authProvider: action.authObj.authProvider,
        given_name: action.authObj.given_name,
        family_name: action.authObj.family_name,
        JWT: action.authObj.JWT,
        expires_on: action.authObj.expires_on,
        valid: false
      };
    default:
      return state;
  }
}
 
export default AuthReducer;