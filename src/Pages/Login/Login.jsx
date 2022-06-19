import "./Login.css"

export const Login = () =>{
    return(
        <div>
            <div id="LoginPage">
            <div id="LoginCard">
                <div id="divLogin">
                    <h1>Login</h1>
                    <div id="mobno"><input style={{width:"80%"}} type="text" placeholder="Email/Number"/></div>
                    <div id="mobno"><input style={{width:"80%"}} type="text" placeholder="Password"/></div>
                    <div id="forgot"><div><input type="checkbox" name="" id="checkbox" />Remember Me</div>
                    <div><a href=""><span>Forgot Password</span></a></div></div>
                    <div><div id="dont">Don't have an account? <a href="/register"><span>Create your account</span></a></div> </div>
                    <div><a href="/"><button id="loginBtn">LOGIN</button></a></div>
                </div>
            </div>
        </div>
        </div>
    )
}