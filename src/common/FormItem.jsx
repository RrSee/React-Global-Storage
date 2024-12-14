import React from 'react'

const FormItem = ({label,name,placeholder,type}) => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={name}>{label}</label>
        <input placeholder={placeholder} onChange={(e) => {
            handleInputChange(e.target.name,e.target.value)
        }} type={type} name={name} className='border p-2 rounded-md'/>
    </div>
  )
}

export default FormItem