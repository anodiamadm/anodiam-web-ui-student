import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { getProperty } from "../../utils/PropertyUtils";

const AnodiamGoogleLogin = ({setCredentials, setError}) => {

  const property = getProperty('googleClientID')

  useEffect(() => {
    const handleCallbackResponse = (response) => {
      setCredentials({email: jwtDecode(response.credential).email, password: '', provider: 'GOOGLE'});
    }
    try {
      /* global google */
      google.accounts.id.initialize({
        client_id: property,
        callback: handleCallbackResponse
      })
      google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: "filled_blue", size: "medium", width: document.getElementById('googleSignInButton').clientWidth}
      )
    } catch (error) {
      setError(error);
    }
  }, [setError, setCredentials, property]);

  return (
    <>
      <form className="anodiam-form">
        <div id='googleSignInButton'></div>
      </form>
    </>
  );
}
 
export default AnodiamGoogleLogin;