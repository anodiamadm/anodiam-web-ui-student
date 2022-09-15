import PageHeading from "../GenericComponents/PageHeading";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AskForRegister from "../GenericComponents/AskForRegister";
import AskForForgetPassword from '../GenericComponents/AskForForgetPassword';

const AnodiamLogin = () => {
  const { dispatch } = useContext(AuthContext);
  const doLogin = () => dispatch({type: 'LOGIN',
    // Authentication Object authObj has to be procured from ANODIAM GATEWAY SERVICE through a fetch.
    authObj: {
      // email has to be fetched from google (oauth2) or UI (local login)
      email: 'pinaki.sen@yahoo.com',
      authProvider: 'FACEBOOK',
      given_name: 'Pinaki',
      family_name: 'Sen',
      JWT: 'ejfnvn32r934urngj54gn5638yu6gj54jg54jkxsad09009',
      expires_on: 1663036724324,
      valid: true
    }});
  return ( 
    <>
      <div>
        <PageHeading heading='Login Page' />
        <div className="anodiam-body-panel-mid">
          <h2>Default Home Page</h2>
          <p>Login Page...</p>
        </div>
        <button onClick={doLogin}>Log In</button>
      </div>
      <AskForRegister />
      <AskForForgetPassword />
    </>
  );
}
 
export default AnodiamLogin;