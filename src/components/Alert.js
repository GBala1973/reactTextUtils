import React from 'react'

const Alert = (props) => {
  const capitalise = (text) => {
    let newtext = text.toLowerCase();
    return newtext.charAt(0).toUpperCase() + text.slice(1);
  }  
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}: </strong> {props.alert.msg}
    </div>
  )
}

export default Alert;
