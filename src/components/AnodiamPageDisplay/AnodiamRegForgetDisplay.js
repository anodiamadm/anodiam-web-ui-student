import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AnodiamLogin from "../AnodiamLogin/AnodiamLogin";
import AnodiamHeader from "../AnodiamHeader/AnodiamHeader";
import AnodiamFooter from "../GenericComponents/AnodiamFooter/AnodiamFooter"
import { useEffect } from "react";

const AnodiamRegForgetDisplay = ({ children }) => {
  const { authObj, dispatch } = useContext(AuthContext);
  useEffect(() => {
    if (authObj.valid===true) {
      dispatch({type: 'LOGOUT', authObj: {email: '', authProvider: '', given_name: '', family_name: '', JWT: '', expires_on: '', valid: false}});
    }
  });
  return ( 
    <>
      <AnodiamHeader />
      <div className="anodiam-container">
        <div className="anodiam-body-panel">
          { authObj.valid===true ? <AnodiamLogin /> : children }
        </div>
      </div>
      <AnodiamFooter />
    </>
  );
}
 
export default AnodiamRegForgetDisplay;