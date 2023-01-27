import React from 'react'
import Form from 'react-bootstrap/Form';
import { FormSelectWrapper } from '../styles/FormSelect/FormSelect.styled';
function FormSelect({name,value,label,list,handleChange}) {
  return (
    <FormSelectWrapper>
     <label htmlFor={name}>{label}</label>
     <Form.Select 
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
      aria-label="Default select example">
      {list.map((itemValue,index)=>{
        return <option key={index} value={itemValue}>
               {itemValue}
        </option>
      })}
    </Form.Select>
    </FormSelectWrapper>
  )
}

export default FormSelect