import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AnodiamLogin from "../AnodiamLogin/AnodiamLogin";
import AnodiamHeader from "../AnodiamHeader/AnodiamHeader";
import AnodiamFooter from "../GenericComponents/AnodiamFooter/AnodiamFooter"

const AnodiamPageDisplay = ({ children }) => {
  const { authObj } = useContext(AuthContext);
  return ( 
    <>
      <AnodiamHeader />
      <div className="anodiam-container">
        <div className="anodiam-body-panel">
          { authObj.valid===true ? children : <AnodiamLogin /> }
        </div>
      </div>
      <AnodiamFooter />
    </>
  );
}
 
export default AnodiamPageDisplay;