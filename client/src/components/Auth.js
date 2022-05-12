import React, { useState, useContext } from "react"
import AuthForm from "./AuthForm"
import { UserContext } from "./context/UserProvider"
import "../index.css"




export default function Auth(){

    const [toggle, setToggle] = useState(false)
    //Grab Context -destructure and take only what needed for more DRY code-
    const {signup, login} = useContext(UserContext)





    return (
        <div>
          <h1 className="home-title">Rock The Vote!</h1>
            { toggle ?
                <>
                    <AuthForm
                        authenticate={signup}
                        btnText="Sign up"
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm
                        authenticate={login}
                        btnText="Login"
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
                </>
            }
        </div>
    )
}
