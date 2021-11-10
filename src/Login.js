import React from "react"

function Login() {
    return (
        <form >
            <h3>Sign In</h3>

            <div class="form-group">
            <label>Enter Username</label>
                <textarea class="text" className = "form-control" rows="1" placeholder = "Enter username"></textarea>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Agree to terms and conditions</label>
                </div>
            </div>
          
            <p className="forgot-password text-justify">
                <a class="nav-link" href="/Profile">Take me to the profile page.</a>
            </p>
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
            <p className="forgot-password text-right">
                <a href="#">Forgot password?</a>
            </p>
        </form>
    );
}

export default Login;