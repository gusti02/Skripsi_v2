import React from 'react';
import AuthLayouts from '../components/Layout/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';

function RegisterPage() {
  return (
    <AuthLayouts title="Register" type="register">
        <FormRegister/>
    </AuthLayouts>
  )
}

export default RegisterPage;