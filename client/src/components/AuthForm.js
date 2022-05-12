import React, { useState } from "react"
const initInputs = { username: "", password: ""}



export default function AuthForm(props){
    const [inputs, setInputs] = useState(initInputs)

    const {
        authenticate,
        btnText
    } = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        authenticate(inputs)  //signup function from the context provider requires credentials
                        //provided in this case by the inputs which are set on state in
                        //this file, see initInputs.
    }

    // function handleLogin(e){
    //     e.preventDefault()  //signup function from the context provider requires
    //                         //credentials provided in this case by the inputs which
    //                         //are set on state in this file, see initInputs.
    //     login(inputs)
    // }



    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputs.username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
            />
            <input
            type="text"
            value={inputs.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            />
            <button className="loginbtn">{btnText}</button>
        </form>
    )
}
