import React from 'react';
import AuthLayouts from '../components/Layout/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin';

function LoginPage() {
  return (
    <AuthLayouts title="Login">
        <FormLogin/>
    </AuthLayouts>
  )
}

export default LoginPage;