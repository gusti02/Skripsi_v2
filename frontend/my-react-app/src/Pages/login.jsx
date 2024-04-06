import React from 'react';
import AuthLayouts from '../components/Layout/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin';

function LoginPage() {
  return (
    <AuthLayouts title="Login" type="login">
        <FormLogin/>
    </AuthLayouts>
  )
}

export default LoginPage;