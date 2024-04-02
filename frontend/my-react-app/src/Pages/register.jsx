import React from 'react';
import AuthLayouts from '../components/Layout/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin';
import FormRegister from '../components/Fragments/FormRegister';

function RegisterPage() {
  return (
    <AuthLayouts title="Register">
        <FormRegister/>
    </AuthLayouts>
  )
}

export default RegisterPage;