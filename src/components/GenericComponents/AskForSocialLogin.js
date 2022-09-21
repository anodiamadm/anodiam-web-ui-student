import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import AnodiamGoogleLogin from "../AnodiamLogin/AnodiamGoogleLogin";

import { Link } from "react-router-dom";

const AskForSocialLogin = () => {
  return (
    <div className="anodiam-body-panel-bottom">
      <h6><Link to="/">Login through social media <FontAwesomeIcon className="icons" icon={faFacebook} /> <FontAwesomeIcon className="icons" icon={faGoogle} />
        <AnodiamGoogleLogin />
      </Link></h6>
    </div>
  );
}
 
export default AskForSocialLogin;