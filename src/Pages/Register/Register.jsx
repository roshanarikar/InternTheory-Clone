import "./Register.css"

export const Register = () =>{
    return(
        <div>
            <div id="LoginPage">
            <div id="registerCard">
                <div id="divLogin">
                    <h1>Registration</h1>
                    <div id="mobno"><input style={{width:"80%"}} type="text" placeholder="First Name"/></div>
                    <div id="mobno"><input style={{width:"80%"}} type="text" placeholder="Last Name"/></div>
                    <div id="mobno"><input style={{width:"80%"}} type="text" placeholder="Email"/></div>
                    <div id="mobno"><input style={{width:"80%"}} type="text" placeholder="Password"/></div>
                    <div><a href="/login"><button id="loginBtn">SIGN UP</button></a></div>
                </div>
            </div>
        </div>
        </div>
    )
}