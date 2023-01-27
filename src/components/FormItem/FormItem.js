import React from 'react'
import { Input } from '../styles/Common/Inputs/Inputs.styled'
import styled from 'styled-components'
const FormItemWrapper=styled.div`
    margin-bottom:24px;
    label{
     display:inline-block;
     margin-bottom:8px;
    }
`
function FormItem({type,name,value,handleChange,label,placeholder}) {
  return (
    <FormItemWrapper >
      <label htmlFor={label}>{label}</label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormItemWrapper>
  )
}

export default FormItem