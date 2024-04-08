import React from 'react';

function Button(props) {

    const {
      children="...", 
      className="bg-green-700", 
      onClick = () => {}, 
      type = "buttonS"
    } = props;
    
    return (
      <button className={`h-10 px-10 font-semibold rounded-md ${className} text-white`}
       type={type}
       onClick = {() => onClick()}
      >
        {children}
      </button>
    )
  }

  export default Button;