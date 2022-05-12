import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from "./components/context/UserProvider"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import Public from "./components/Public"
import "./index.css"


export default function App() {
  const { token, logout } = useContext(UserContext)

  return(
    <div className="app">
      <Navbar logout={logout} />
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate replace to="/profile" /> : <Auth />}
        />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate replace to="/" />}
        />
        <Route
          path="/public"
          element={token ? <Public /> : <Navigate replace to="/" />}
        />
      </Routes>
    </div>
  )
}


