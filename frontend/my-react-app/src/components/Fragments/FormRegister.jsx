import React from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';


function FormRegister() {
  return (
    <form action="">
        <InputForm name="fullname" type="text" placeholder="Insert Your Name" label="Full Name"/>
        <InputForm name="email" type="email" placeholder="Example@mail.com" label="Email"/>
        <InputForm name="password" type="password" placeholder="********" label="Password"/>
        <InputForm name="confirmPassword" type="password" placeholder="********" label="Confirm Password"/>
        <Button className='bg-blue-600 w-full'>Register</Button>
    </form>
  )
}

export default FormRegister;