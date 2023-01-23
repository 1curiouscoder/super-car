import React from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from '../NavBar/Navbar'

const Profile = ({payload}) => {
  { !payload.flags.login && <Navigate to="/login" />}
  console.log("profile");
  return (
    <Navbar />

  )
}
export default Profile;