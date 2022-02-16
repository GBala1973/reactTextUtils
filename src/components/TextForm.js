import React, { useState } from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('Enter text here');  
  // text = "Enter new text" -- Wrong way to set/update text variable  
  //setText("Enter new text") -- Correct way to set/update text variable

  const handleUpperCase = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
  }

  const handleClearText = () => {
    setText('');
  }

  const handleLowerCase = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
  }

  const handleAbreviation = () => {
    let abTextArr = text.split(' ');
    let abText = '';
    if(abTextArr.length) {
      abTextArr.forEach((elem, i) => {
        abText += (i != abTextArr.length -1) ? abTextArr[i].charAt(0).toUpperCase() +'. ' : abTextArr[i];
      });
    } 
    setText(abText);
  }

  const handleExtractEmail = () => {
    const regex = (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setText(text.match(regex).join('\n'));

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
            <button className="btn btn-primary btn-sm" onClick={handleUpperCase}>Upper</button>
            <button className="btn btn-primary btn-sm" onClick={handleLowerCase}>Lower</button>
            <button className="btn btn-primary btn-sm" onClick={handleAbreviation}>Abreviate</button>
            <button className="btn btn-primary btn-sm" onClick={handleExtractEmail}>Email extract</button>
            <button className="btn btn-primary btn-sm" onClick={handleClearText}>Clear</button>
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
