import React from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';


function FormLogin() {
  return (
    <form action="">
        <InputForm name="email" type="email" placeholder="Example@mail.com" label="Email"/>
        <InputForm name="password" type="password" placeholder="********" label="Password"/>
        <Button classname='bg-blue-600 w-full'>Login</Button>
    </form>
  )
}

export default FormLogin;