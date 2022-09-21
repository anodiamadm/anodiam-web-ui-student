import AnodiamTooltipBody from "../GenericComponents/AnodiamTooltipBody";
import { stopChange } from "../../utils/StopCutCopyPaste";
import { useState } from "react";

const AnodiamFormLogin = ({ setCredentials, isPending }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setCredentials({email, password, provider: 'LOCAL'});
    setEmail('');
    setPassword('');
  };

  const toggleShowHidePassword = (e) => {
  if(document.getElementById("password").type==="password") {
    document.getElementById("password").type="text";
    document.getElementById("showPasswordIcon").hidden=true;
    document.getElementById("hidePasswordIcon").hidden=false;
    document.getElementById("showPasswordText").hidden=true;
    document.getElementById("hidePasswordText").hidden=false;
  } else {
    document.getElementById("password").type="password";
    document.getElementById("showPasswordIcon").hidden=false;
    document.getElementById("hidePasswordIcon").hidden=true;
    document.getElementById("showPasswordText").hidden=false;
    document.getElementById("hidePasswordText").hidden=true;
  }}

  return (
    <>
      <form className="anodiam-form" onSubmit={handleSubmit}>
        <div className="container anodiam-container">

          <label>Email:&nbsp;&nbsp;
          <AnodiamTooltipBody title="Your email address is used as your Anodiam username.">
          <i className="fa fa-question-circle anodiam-help-button"></i></AnodiamTooltipBody></label>
          <input
            type="email" required value={email} 
            onChange={(e) => setEmail(e.target.value)} className="form-control" 
            onCut={stopChange} onCopy={stopChange} onPaste={stopChange}
          />
                  
          <label>Password:</label>
          <input
            id="password" type="password" required value={password} autoComplete="on"
            onChange={(e) => setPassword(e.target.value)} className="form-control" 
            onCut={stopChange} onCopy={stopChange} onPaste={stopChange}
          />

          <label className="anodiam-form-container">
          <i className="fa fa-eye password-eye" aria-hidden="true" id="showPasswordIcon"></i>
          <i className="fa fa-eye-slash password-eye" aria-hidden="true" id="hidePasswordIcon" hidden={true}></i>
          <span id="showPasswordText"> Show Password</span><span id="hidePasswordText" hidden={true}> Hide Password</span>
          <input type="checkbox" onClick={toggleShowHidePassword} />
          <span className="anodiam-form-checkmark"></span></label>

          { !isPending && <button className="btn btn-primary btn-block"
                            style={{width: '399px', marginLeft: '-11px', borderRadius: '4px' }}>
                          Login</button> }
          { isPending && <button disabled className="btn btn-primary btn-block btn-disabled" style={{width: '399px', marginLeft: '-11px', borderRadius: '4px' }}>
            Logging in {email}...</button> }
                  
        </div>
      </form>
    </>
  );
}
 
export default AnodiamFormLogin;