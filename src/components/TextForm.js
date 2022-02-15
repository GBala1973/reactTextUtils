import React, { useState } from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('Enter text here');  
  // text = "Enter new text" -- Wrong way to set/update text variable  
  //setText("Enter new text") -- Correct way to set/update text variable

  const handleUpperCase = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
  }

  const handleLowerCase = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container">
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
          </div>
          <div className="btn-container d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleUpperCase}>Convert to upper case</button>
            <button className="btn btn-primary" onClick={handleLowerCase}>Convert to lower case</button>
          </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{ text.split(' ').length } words, { text.length } characters</p>
        <p>{0.008 * text.split(' ').length } minutes to read!</p>
        <h3>Preview</h3>
        <p>{ text }</p>
      </div>
    </>
    
  )
}

export default TextForm
