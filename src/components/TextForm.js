import React, { useState } from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('Enter text here');  
  // text = "Enter new text" -- Wrong way to set/update text variable  
  //setText("Enter new text") -- Correct way to set/update text variable

  const handleUpClick = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
  )
}

export default TextForm
