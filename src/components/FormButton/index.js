import React from 'react'

function FormButton(props) {
  return (
    <button  onClick={props.onClick} className={`site-button ${props.className}`}><span>{props.title?props.title:'записаться'}</span></button>
  )
}

export default FormButton
