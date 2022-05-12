import React from "react"
import { Link } from "react-router-dom"
import "../index.css"
import Profile from "./Profile"

export default function Navbar(props){
    const { logout } = props

    return (
        <div className="navbar">
            <Link className="profilelink" to="/profile">View Current Political Issues</Link>
            <Link className="publiclink" to="/public">Not a member? Signup!</Link>
            {/* <button className="logoutbtn" onClick={logout}>Logout</button> */}
        </div>
    )
}
