import React, { useEffect, useRef } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';


function FormLogin() {

  {/* Handle Event Login */}
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value) /* Take Value of Email */
    localStorage.setItem('password', event.target.password.value) /* Take Value of Password */
    window.location.href = "/products"
  }

  {/* useRef to focus on email form */}
  const emailRef = useRef(null)
  
  {/* useEffect to focus on email form */}
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleLogin}>
        <InputForm name="email" type="email" placeholder="Example@mail.com" label="Email" ref={emailRef}/>
        <InputForm name="password" type="password" placeholder="********" label="Password"/>
        <Button className='bg-blue-600 w-full'>Login</Button>
    </form>
  )
}

export default FormLogin;