import React from 'react'
import Card from '../Components/Card';
import { useForm } from 'react-hook-form';
import Navbar from '../NavBar/Navbar';
import { Navigate, redirect } from 'react-router-dom';
import { credentials as cred } from '../Data/Data';
export const Login = ({intent,payload }) => {
  const { flags, setFlags } = payload;
  
  { flags.login && <Navigate to={"/profile/"+flags.username } />}

  const { register, handleSubmit, watch, setValue,  formState: { errors },unregister} = useForm();
  const onSubmit = (data) =>
  {
    if(intent === "login") 
    {
      const {username , password } = data;
      if(username=== cred.username) 
      {
        if(password===cred.password)
        {
          console.log(data);
          flags.login = true;
          flags.username = username;
          setFlags(flags);
        }
        else
        {
          alert("error occcured");
        }
      }
      else alert("error occcured");
    }
    //console.log(data);
  }
  const data = { register, handleSubmit, watch, setValue,errors, onSubmit,structure,unregister };

  return(
  <div className='flex flex-col justify-between h-screen'>
      <Navbar from ="login" />
      { flags.login && <Navigate to={"/profile/"+flags.username} /> }
      <div></div>
      <Card type={intent} className={style} payload={data} />
      <div className='aesthetic'></div>
  </div>)
}
export default Login;
const style = "flex content-center self-center ";

const structure = {
div:[
  {
  style:"",
  key:"pass",
  input:[
  {
    innerText:"New password",
    id:"newpass",
    checks: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{4,20}/  },
    styles:"",
    type:"password",
    validation: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/ }
  },
  {
    innerText:"Confirm password",
    id:"confirmpass",
    checks: { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{8,20}/,  },
    styles:"",
    type:"password",
    validation: { required:true, pattern: /[A-Za-z0-9_]{8,20}/, onBlur: (e) => console.log(e) }
  },
      ],
  }],
button:[
  {
    innerText:"Submit",
    type:"submit",
    styles:""
  }
]
}