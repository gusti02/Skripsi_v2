function Button(props) {

    const {children="...", classname="bg-green-700"} = props;

    return (
      <button className={`h-10 px-10 font-semibold rounded-md ${classname} text-white`}
       type='submit'>
        {children}
      </button>
    )
  }

  export default Button;