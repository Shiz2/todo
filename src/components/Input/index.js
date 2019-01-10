// In the child component
import React from "react"

// export default props => (
//   <input 
//       type="text"
//       name="name"
//       onChange={props.updateNameHandler}
//   />
// );

const FormInput = ({ update, value, type, title }) => (
  <input
    type={type}
    value={value}
    onChange={event => update(event.target.value)}
    />
)


export default FormInput;

