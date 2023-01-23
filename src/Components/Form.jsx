import React from 'react';
import { useState } from 'react';
import { InputTag } from './InputTag';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
 const Form = ({type, payload}) => {
  
  const { register, handleSubmit, watch, setValue,errors, onSubmit,unregister } = payload;
  if(type === "newpass" || type === "signup")
  {
   return (<div className=" justify-between" >
    <Link to="/login" className='mx-2'>X</Link>
    <h2 className='text-center font-mono font-bold text-lg'>{type}</h2>
      <form className="flex flex-col flex-wrap bg-neutral-50 rounded p-8" onSubmit={handleSubmit(onSubmit)}>
        { 
          payload.structure.div.map( 
           (data) => { 
            return (
              <div className={data.style + " justify-center"} key={data.key}>
                { data.input.map(
                  (tags) => { 
                      return ( 
                        
                          <InputTag label={styles.login.label} id={tags.id} type={tags.type} key={tags.id+tags.innerText}
                          style={styles.login.inputText +" "+ tags.styles} register={register(tags.id, tags.validation ) } 
                          errors={errors}>{tags.innerText}</InputTag>
                        
                              ) 
                            }  
                              )
                      }
                </div>         
                    ) 
            }              
                                    )
        }
        { payload.structure.button.map((data) => {
        return (
          <div className="flex flex-wrap justify-center" key={data.innerText}> 
        <Button className={data.styles} type={data.type} >{data.innerText}</Button>
        </div>)
        } ) }
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Acme Corp. All rights reserved.
      </p>
    </div>)
  }

  if(type === "login")
  {
    
    return (
<div className="flex flex-col w-max justify-evenly" >
  <h2 className='text-center font-mono font-bold text-lg'>{type}</h2>
  <form className="bg-neutral-50 rounded px-8 pt-6 pb-8" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
      <InputTag label={styles.login.label} id="username" type="text" style={styles.login.inputText} register={register("username", { required:true, pattern: /[A-Za-z][A-Za-z0-9_]{6,20}/ }) } errors={errors}>Username</InputTag>
    </div>
    <div className="mb-6">
    <InputTag label={styles.login.label} id="password" type="password" style={styles.login.inputText} register={register("password", { required:true, pattern: /[A-Za-z0-9_]{6,20}/ }) } errors={errors}>Password</InputTag>
    </div>
    <div className="flex flex-col items-center justify-between">
      <Button className="" type="submit">
        Sign In
      </Button>
      <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 py-2" to="/signup">
        Create new account
      </Link>
      <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/forgot">
        Forgot Password?
      </Link>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
        &copy;2023 Acme Corp. All rights reserved.
  </p>
</div>
)
    }


  if(type === 'home')
  {
    const {trip,setTrip} = payload;
  return (
    <form className=" " onSubmit={handleSubmit(onSubmit)}>
  <div className=" flex flex-col justify-center lg:w-max">
  <div className='flex self-center flex-wrap '>
    <div onClick={() => {setTrip("oneway"); unregister("edate"); } } className={ styles.home.optionText + ((trip=="oneway") ? "border-black rounded-xl m-2 border-2 p-2" : "rounded-xl m-2 border-2 p-2 hover:border-yellow-900")}>Oneway Trip</div>
    <div onClick={() => {setTrip("round"); } } className={ styles.home.optionText + ((trip=="round") ? "border-black  rounded-xl m-2 border-2 p-2" : "rounded-xl border-2 p-2 hover:border-yellow-900 m-2")}>Round Trip</div>
    <div onClick={() => {setTrip("hourly"); unregister("edate"); unregister("dest"); } } className={styles.home.optionText + ((trip=="hourly") ? "border-black  rounded-xl m-2 border-2 p-2" : "rounded-xl border-2 p-2 hover:border-yellow-900 m-2")}>Hourly</div>
  </div>
      <div className='flex flex-col sm:flex-row sm:w-fit self-center '>
        <InputTag label={styles.home.label} id="src" type="text" style={styles.home.inputText} register={register("src", { required:true, maxLength: 10 }) } placeholder="Enter Pickup Location" errors={errors}>From</InputTag>
        { trip != "hourly" &&  <InputTag label={styles.home.label} id="dest" type="text" style={styles.home.inputText} register={register("dest", { required: true, maxLength: 10,} )} placeholder="Enter Drop Location"  errors={errors}>To</InputTag> }
      </div>
      
      <div className='flex flex-col sm:flex-row sm:w-fit self-center flex-wrap p-2 '>
        <InputTag label={styles.home.label} id="sdate" type="date" style={styles.home.inputDate} register={register("sdate", { required:true,onChange:  () => {(trip == "oneway" && trip == "hourly") && setValue('edate',watch('sdate'))},  } )} errors={errors}>Pickup Date</InputTag>
        { (trip != "oneway" && trip != "hourly") &&  <InputTag label={styles.home.label} id="edate" type="date" style={styles.home.inputDate} register={register("edate", { required:true, min: watch('sdate')})} errors={errors}>Drop Date</InputTag> }
      </div>
</div>

  <div className='flex w-full justify-center'>
      <Button type="submit" className="block bg-black p-3 text-white rounded-2xl" >Search</Button>
      </div>
</form>
  )
  }
return <div>Nothing to display!</div>


}

const styles = {
home:  {
    optionText:"font-semibold cursor-pointer ",
    inputText: " rounded-t-lg px-2.5 pb-2.5 pt-2 w-full font-semibold text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    inputDate: " text-gray-900 form-control ",
    label: " text-sm dark:text-gray-400 font-bold peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
  },
login: {
          label:'block text-gray-700 text-sm font-mono font-light mb-2',
          inputText: 'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
       }
}

const structure = {
  form:{
    login:{},
    reset:{
      style:"",
        div:{
              style:"mb-4"
             }

    }
  }
}
export default Form;
