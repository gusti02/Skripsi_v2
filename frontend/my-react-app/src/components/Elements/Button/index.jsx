import React from 'react';

function Button(props) {

    const {children="...", className="bg-green-700"} = props;
    return (
      <button className={`h-10 px-10 font-semibold rounded-md ${className} text-white`}
       type='submit'>
        {children}
      </button>
    )
  }

  export default Button;