import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../NavBar/Navbar'

const Profile = ({payload}) => {
  const navigate = useNavigate();
 
  //console.log(payload);
  const signout = () => {
              window.localStorage.setItem("login_state", JSON.stringify({login:false, username:null}));
              payload.flags.login = false;
              payload.flags.username = null;
              payload.setFlags(flags);
            }
  const data = {...payload,signout};
  return (
    <>
     {(!payload.flags.login && navigate("/login", { replace: true }))}
    <Navbar from="profile" payload={data} />
    
    </>
  )
}
export default Profile;