import { useState } from "react";

const Login = () => {
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const handleToggleView = () => {
      setIsForgotPassword((prev) => !prev);
    }
  return (
    <>
            <div className="container" id="container">
      <div className={`form-container ${isForgotPassword ? 'forgot-container' : 'sign-in-container'}`}>
        <div className="mb-5 text-center d-lg-none">
          <img height="68" src="http://127.0.0.1:8000/images/logo.png" alt="" />
        </div>
        <form method="POST" action="login" aria-label="Login">
          <input type="hidden" name="_token" value="NhbZPGtOIDlD3MtmhB2gCEFDMGOfCJzj203dqFqh" />
          <div className="w-100 form-contain">
            <h1 className="custom-heading">{isForgotPassword ? 'Forgot Password' : 'Sign in'}</h1>
            {/* Email Input */}
            <div className="mb-2">
              <input required type="email" name="email" className="form-control" id="email" placeholder="Email" value="" autoFocus />
            </div>
            {/* Password Input */}
            <div className="mb-2">
              <div className="position-relative">
                <input required type="password" name="password" className="form-control show-pass" placeholder="Password" id="password" />
                <img src="http://mynance.mytmdev.com/images/images/eye-solid.svg" className="show-eye show eye-show" alt="" />
                <img src="http://mynance.mytmdev.com/images/images/eye-slash-solid.svg" className="show-eye close eye-close" alt="" />
              </div>
            </div>
            {/* Login Button */}
            <button className="btn btn-theme btn-lg w-100 mt-2" type="submit">
              Login
            </button>
            {/* Forgot Password Link */}
            <div className="text-end mt-3">
              <span id="forgot-password" onClick={handleToggleView} className="pointer">
                {isForgotPassword ? 'Sign In Instead?' : 'Forgot Password?'}
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          {/* Right Overlay Panel */}
          <div className={`overlay-panel overlay-right ${isForgotPassword ? 'l' : ''}`}>
            <div className="text-center l mb-2">
              <img src="http://mynance.mytmdev.com/images/logo.png" height="60" alt="" />
            </div>
            <h1>{isForgotPassword ? 'Welcome !' : 'One Step Away'}</h1>
            <p>{isForgotPassword ? 'To keep connected with us please login with your personal info.' : 'Enter your account email to recover your password.'}</p>
            {/* TODO: Add appropriate button based on the panel */}
          </div>
          {/* Left Overlay Panel */}
          <div className={`overlay-panel overlay-left ${isForgotPassword ? '' : 'mb-2'}`}>
            <div className="text-center mb-2">
              <img src="http://mynance.mytmdev.com/images/logo.png" height="60" alt="" />
            </div>
            <h1>{isForgotPassword ? 'One Step Away' : 'Welcome !'}</h1>
            <p>{isForgotPassword ? 'Enter your account email to recover your password.' : 'To keep connected with us please login with your personal info.'}</p>
            <button className="btns" onClick={handleToggleView} id={isForgotPassword ? 'signIn' : 'signUp'}>
              {isForgotPassword ? 'Sign In Instead' : 'Recover Password'}
            </button>
          </div>
        </div>
      </div>
    </div>





    </>
  );
};

export default Login;
