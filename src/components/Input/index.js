// In the child component
import React from "react"

const FormInput = ({ update, value, type }) => (
  <input
    type={type}
    value={value}
    onChange={event => update(event.target.value)}
    />
)

export default FormInput;

