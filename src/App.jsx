import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Errorpage from './Pages/Errorpage';
import Homepage from './Pages/Homepage'
import Login  from './Pages/Login';
import Signup  from './Pages/Signup';
import Profile from './Pages/Profile';

function App() {
  
const [flags,setFlags] = useState({login:false, username:null});
  
const data = {flags, setFlags};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Homepage payload={data} />,
    errorElement:<Errorpage payload={data} />,
    
  },
  {
    path:'/login',
    element:<Login intent="login" payload={data} />,
    errorElement:<Errorpage payload={data} />,
  },
  {
    path:'/forgot',
    element:<Login intent="newpass" payload={data} />,
    errorElement:<Errorpage payload={data} />,
  },
  {
    path:"/signup",
    element: <Signup payload={data} />,
    errorElement: <Errorpage payload={data} />,
  },
  {
    path:"/profile/:username",
    element: <Profile payload={data} />,
    errorElement: <Errorpage payload={data} />,
  }
]
);
  
  return (
    <RouterProvider router = {router} />
  )
}
export default App;
