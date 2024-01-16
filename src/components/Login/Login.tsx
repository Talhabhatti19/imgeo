import { useState } from "react";

const Login = () => {
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const handleToggleView = () => {
      setIsForgotPassword((prev) => !prev);
    }
  return (
    <>
    <div className="login-form">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="overlay-container">
                    <div className="overlay">
                        <div className={`overlay-panel overlay-right ${isForgotPassword ? 'l' : ''}`}>
                            <div className="text-center l mb-2">
                            <img src="http://mynance.mytmdev.com/images/logo.png" height="60" alt="" />
                            </div>
                            <h1>{isForgotPassword ? 'Welcome !' : 'One Step Away'}</h1>
                            <p>{isForgotPassword ? 'To keep connected with us please login with your personal info.' : 'Enter your account email to recover your password.'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className={`form-container ${isForgotPassword ? 'forgot-container' : 'sign-in-container'}`}>
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
            </div>
        </div>
    
      
    
    </div>
    </div>

    </>
  );
};

export default Login;
