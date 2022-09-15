import { createContext, useReducer, useEffect } from 'react';
import AuthReducer from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authObj, dispatch] = useReducer(AuthReducer, 
    {email: '', authProvider: '', given_name: '', family_name: '', JWT: '', expires_on: '', valid: false}, 
    () => localStorage.getItem('authObj') ? 
          JSON.parse(localStorage.getItem('authObj')) : 
          {email: '', authProvider: '', given_name: '', family_name: '', JWT: '', expires_on: '', valid: false});
  useEffect(() => {
    localStorage.setItem('authObj', JSON.stringify(authObj))
  }, [authObj])
  return (
    <AuthContext.Provider value={{authObj, dispatch}}>
      { props.children }
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;