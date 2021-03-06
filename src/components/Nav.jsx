import React, { useState } from 'react';
import { BiMenu } from "react-icons/bi";

const Nav = ({ changePage }) => {
  const [showing, setShowing] = useState(true)
  const [width, setWidth] = useState("0px")
  const hour = new Date().getHours()
  // const hour = 21
  
  return (
    <>
      <BiMenu className="hamburger"style={showing ? { display: "block" } : { display: "none" }, {color: (hour > 20) && "white"}} onClick={() => { setWidth("250px"); setShowing(!showing) }} />
      <div className="sidenav" style={{ width: width }}>
        <p className="closebtn" onClick={() => { setWidth("0px"); setShowing(!showing) }}>&times;</p>
        <p onClick={() => changePage("landing")}>Today</p>
        <p onClick={() => changePage("hourly")}>Hourly</p>  
        <p onClick={() => changePage("weekly")}>Weekly</p>
      </div>
    </>
  );
};

export default Nav;
