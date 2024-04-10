import React, { forwardRef } from 'react'
import Label from './Label'
import Input from './Input'

{/* changing form input using forwardRef */}
const InputForm = forwardRef((props, ref) => {
    const {label, name, type, placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlfor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
        </div>
  )
})

export default InputForm