import React from 'react'

const Button = ({isActive, clicked}) => {
  return (
    <div>
        <button onClick={clicked}>{isActive ? "Get another Album": "Get An Album"}</button>
    </div>
  )
}

export default Button;