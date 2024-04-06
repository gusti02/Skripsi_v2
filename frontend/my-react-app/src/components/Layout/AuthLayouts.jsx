import React from 'react';
import {Link} from 'react-router-dom';

function AuthLayouts(props) {
    const {title, children, type} = props
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-3 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
              Welcome, please enter your detail!
          </p>
          {children}
          <Navigation type={type}/>
      </div>
    </div>
  )
}

function Navigation(props) {
  const {type} = props
  if (type === 'login') {
    return (
      <p className='text-sm text-center mt-5'>
        Don't have an account?{" "} 
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    )
  } else {
    return (
      <p className='text-sm text-center mt-5'>
        Have an account?{" "} 
        <Link to="/Login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    )
  }
}

export default AuthLayouts