import React from 'react'
import Form from '../common/Form'
import { useStore } from 'zustand'
import { themeStore } from '../common/Store'

const Login = () => {

    const {theme, toggle} = useStore(themeStore)

    const formInputs = [
        {
            name: "email",
            label: "Email:",
            type: "email",
            placeholder: "Enter your email"

        },
        {
            name: "password",
            label: "Password:",
            type: "password",
            placeholder: "Enter a password"

        },
    ]

    const handleDataSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    const formButtons = [
        {
            title: "Login",
            style: "bg-blue-700 text-white py-3 rounded-md",
            action: handleDataSubmit
        },
        {
            title: "Don't have an account?",
            style: "text-blue-700",
            action: () => { }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => { }
        }
    ]
  return (
    <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
        <Form image={{url: "https://cdn.stocksnap.io/img-thumbs/280h/cliff-clouds_IZB4SE5SRJ.jpg", position: "rigth", style: "w-[450px]"}}
        containerStyle='w-[850px] mt-12 mx-auto' formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md" formInputs={formInputs} formButtons={formButtons}/>
    </div>
  )
}

export default Login