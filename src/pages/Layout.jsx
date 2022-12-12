import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const navMenu = ["home", "about", "product"];

  return (
    <div>
        {navMenu.map((menu) => (<NavLink style={({isActive}) => isActive ? {color: "green", fontWeight: 400} : {color: ""}} to={`${menu}`} className="nav">{menu}</NavLink>))}
        <hr></hr>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout