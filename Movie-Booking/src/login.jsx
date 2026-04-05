import "./login.css"
export default function Login() {
    return(
        <div className="login-content">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        
                        <input type="password" placeholder="Password" />
                        <p className="forgot-password">Forgot Password?</p>
                    </div>
                        <input type="submit" className="submit-btn" value="Login" />
                    
                </form>

            </div>
        </div>
    );
}