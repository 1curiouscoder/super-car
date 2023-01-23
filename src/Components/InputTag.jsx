import React from 'react'
import { useState } from 'react'

export const InputTag = ({id,type,children,register,style,errors,label,placeholder}) => {
  //const [value,setValue] = useState("");
  
  if(type==="date") 
  {
    //console.log(register);
    return  (
      <div className='flex flex-col'>
            <div  className='flex px-1 my-2 sm:m-0 datepicker form-floating w-min '>
                <label htmlFor={id} className={"block text-sm "+label} >{children}</label>
                <input id={id} type={type} className={style+ (errors[id] ? "py-2 px-2  border-2 rounded border-red-900 focus:outline-none" : "py-2 px-2  border-2 focus:border-indigo-800 hover:border-indigo-800 rounded")}   {...register} />
            </div>
            <span className={errors[id] ? "self-center text-red-500 text-xs pt-1" : "hidden"}> 
                      <p> 
                      Please check {children}
                      </p> 
                </span>
      </div>
            )
  }
  if(type==="text" || type==="password" || type==="number" ){
    //console.log(register);
    type!="radio" ? (errors[id] ? style += " border-red-900 " : style += " focus:border-indigo-800 hover:border-indigo-800") : "";
  return (
  <>  
    <div className=' h-max mx-2 mb-2'>
    <label htmlFor={id} className={label}>{children}</label>
    <input id={id} type={type} className={style} key={id} placeholder={placeholder} {...register} />
    <span className={type!="radio" ? (errors[id] ? "text-center text-red-500 text-xs pt-1" : "hidden"): "hidden"} > 
      <p> 
      Please check {children} 
      </p> 
    </span>
    </div>
  </>
  )
}
return (<></>);
}
