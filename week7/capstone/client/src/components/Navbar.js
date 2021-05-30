import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../context/UserProvider"

export default function Navbar(props){
  const { logout } = useContext(UserContext)
  return (
    <div className="navbar">
      <Link classname="navPro" to="/profile">Profile</Link>
      <Link classname="navPub" to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}