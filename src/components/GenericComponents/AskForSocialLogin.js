import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-router-dom";

const AskForSocialLogin = () => {
  return (
    <div className="anodiam-body-panel-bottom">
      <h6><Link to="/">Login through <FontAwesomeIcon className="icons" icon={faFacebook} /> or <FontAwesomeIcon className="icons" icon={faGoogle} />
      </Link></h6>
    </div>
  );
}
 
export default AskForSocialLogin;