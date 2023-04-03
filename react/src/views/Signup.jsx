import { Link } from "react-router-dom"


export default function Signup(){

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit="{onSubmit}">
                    <h1 className="title">
                        Login into your account
                    </h1>
                    <input type="name" placeholder="First Name"/>
                    <input type="name" placeholder="Last Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Password Confirmation"/>
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already Registered? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}