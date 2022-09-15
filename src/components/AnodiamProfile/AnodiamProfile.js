import PageHeading from "../GenericComponents/PageHeading";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const AnodiamProfile = () => {
  const { authObj } = useContext(AuthContext);
  return (
    <div>
      <PageHeading heading={`Welcome ${authObj.given_name} ${authObj.family_name}`} />
      <div className="anodiam-body-panel-mid">
        <h2>Logged In Home Page</h2>
        <p>Profile Page...</p>
      </div>
    </div>
  );
}
 
export default AnodiamProfile;