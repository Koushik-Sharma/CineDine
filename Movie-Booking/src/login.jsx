import "./login.css"
export default function Login() {
    return(
        <div className="login-content">
            <div className = "bg-corousel">
                <div className="row row1">
                    <img className="img1" src="/src/assets/login-corousel/p1.jpg"></img>
                    <img className="img2" src="/src/assets/login-corousel/p2.jpg"></img>
                    <img className="img3" src="/src/assets/login-corousel/p3.jpg"></img>
                    <img className="img4" src="/src/assets/login-corousel/p1.jpg"></img>
                    <img className="img5" src="/src/assets/login-corousel/p2.jpg"></img>
                </div>
                <div className="row row2">
                    <img className="img6" src="/src/assets/login-corousel/p4.jpg"></img>
                    <img className="img7" src="/src/assets/login-corousel/p5.jpg"></img>
                    <img className="img8" src="/src/assets/login-corousel/p6.jpg"></img>
                    <img className="img9" src="/src/assets/login-corousel/p4.jpg"></img>
                    <img className="img10" src="/src/assets/login-corousel/p5.jpg"></img>
                </div>
                <div className="row row3">
                    <img className="img11" src="/src/assets/login-corousel/p7.jpg"></img>
                    <img className="img12" src="/src/assets/login-corousel/p8.jpg"></img>
                    <img className="img13" src="/src/assets/login-corousel/p9.jpg"></img>
                    <img className="img14" src="/src/assets/login-corousel/p7.jpg"></img>
                    <img className="img15" src="/src/assets/login-corousel/p8.jpg"></img>
                </div>
            </div>
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