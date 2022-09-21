import PageHeading from "../GenericComponents/PageHeading";
import AskForRegister from "../GenericComponents/AskForRegister";
import AskForForgetPassword from '../GenericComponents/AskForForgetPassword';
import AnodiamFormLogin from "./AnodiamFormLogin";
import { useState, useEffect, useContext } from "react";
import AnodiamGoogleLogin from "./AnodiamGoogleLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { getUrl } from "../../utils/UrlUtils";

const AnodiamLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', provider: '' });
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = useContext(AuthContext);
  const url = getUrl('loginUrl');

  useEffect(()=>{
    setIsPending(true);
    const abortCont = new AbortController();
    fetch(url, {
      crossDomain: true,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
        signal: abortCont.signal
      }).then(res => {
        if (res.ok || res.status===400 || res.status===500) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      }).then(jsonData => {
        setIsPending(false);
        if(jsonData.ok === true) {
          console.log('DISPATCH LOGIN with JSON Data');
          dispatch({type: 'LOGIN', authObj: jsonData.Data});
          setError('')
        } else {
          setError(`HTTP Error: ${jsonData.message}`);
          console.log('DISPATCH LOGOUT');
          dispatch({type: 'LOGOUT', authObj: jsonData.Data});
        }
      }).catch(err => {
        if(err.name === 'AbortError') {
          return () => abortCont.abort();
        } else {
          setError(`HTTP Error: ${err.message}`);
          dispatch({type: 'LOGOUT', authObj: {email: '', authProvider: '', given_name: '', family_name: '', JWT: '', expires_on: '', valid: false}});
        }
      }).finally(() => {
        setIsPending(false);
      }
    );
  }, [credentials, url, dispatch]);

  return ( 
    <>
      <div>
        <PageHeading heading='Login Page' />
        <div className="anodiam-body-panel-mid">

          { error!=='' && <div className="mandatory center-align">{ error }</div> }
          
          <AnodiamFormLogin setCredentials={setCredentials} isPending={isPending} />

          <AnodiamGoogleLogin setCredentials={setCredentials} setError={setError} />
          
        </div>
      </div>      
      <AskForRegister />
      <AskForForgetPassword />
    </>
  );
}
 
export default AnodiamLogin;