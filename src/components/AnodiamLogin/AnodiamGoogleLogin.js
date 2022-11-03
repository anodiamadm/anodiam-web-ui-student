import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { getProperty } from "../../utils/PropertyUtils";

const AnodiamGoogleLogin = ({setCredentials, setError}) => {

  const property = getProperty('googleClientID')

  useEffect(() => {
    const handleCallbackResponse = (response) => {
      console.log(`RESPO: ${response.credential}`);
      console.log(`USER:`);
      console.log(`NAME: ${jwtDecode(response.credential).name}`);
      console.log(`GIVEN NAME: ${jwtDecode(response.credential).given_name}`);
      console.log(`FAMILY NAME: ${jwtDecode(response.credential).family_name}`);
      console.log(`EMAIL: ${jwtDecode(response.credential).email}`);
      console.log(`PICTURE(URL): ${jwtDecode(response.credential).picture}`);
      console.log(`JWT TOKEN: VALUE: ${jwtDecode(response.credential).nonce}`);
      console.log(`JWT TOKEN: ISSUE TIME: ${jwtDecode(response.credential).iat}`);
      console.log(`JWT TOKEN: EXPIRES TIME: ${jwtDecode(response.credential).exp}`);
      console.log(`AUTHORITIES: ${jwtDecode(response.credential).authorities}`);
      setCredentials({email: jwtDecode(response.credential).email, password: '', provider: jwtDecode(response.credential).iss});
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