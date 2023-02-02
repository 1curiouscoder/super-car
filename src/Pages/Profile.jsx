import React from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from '../NavBar/Navbar'

const Profile = ({payload}) => {
  { !payload.flags.login && <Navigate to="/login" />}
  //console.log(payload);
  const signout = () => {

              window.localStorage.setItem("login_state", JSON.stringify({login:false, username:null}));
              setFlags({login:false, username:null});
            }
  const data = {...payload,signout};
  return (
    <Navbar from="profile" payload={data} />

  )
}
export default Profile;