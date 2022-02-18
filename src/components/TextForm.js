import React, { useState } from 'react'

const TextForm = (props) => {
  const [text, setText] = useState('');  
  // text = "Enter new text" -- Wrong way to set/update text variable  
  //setText("Enter new text") -- Correct way to set/update text variable

  const handleUpperCase = () => {
    const upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert('Converted to uppercase', 'success');
  }

  const handleClearText = () => {
    setText('');
  }

  const handleLowerCase = () => {
    const lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert('Converted to lowercase', 'success');
  }

  const handleAbreviation = () => {
    let abTextArr = text.split(' ');
    let abText = '';
    if(abTextArr.length) {
      abTextArr.forEach((elem, i) => {
        abText += (i !== abTextArr.length -1) ? abTextArr[i].charAt(0).toUpperCase() +'. ' : abTextArr[i];
      });
    } 
    setText(abText);
    props.showAlert('Abbreviate completed', 'success');
  }

  const handleCapitalizeClick = () => {
    const words = text.split(' ')
    for (let i=0; i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        console.log(words[i].substring(1))
    }
    let newText = words.join(' ');
    setText(newText)
    props.showAlert('Text capitalize successfully', 'success');
  }

  const handleExtractEmail = () => {
    const regex = (/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setText(text.match(regex).join('\n'));
    props.showAlert('Email extracted', 'success');

  }

  const handleRedundancy = ()=> { 
    let set1 = new Set(text.split(" "));
    let newText = Array.from(set1).join(" ");
    setText(newText);
    props.showAlert('Redundent word removed', 'success');
  }

  const onAlternatingCase = () => {
    let newtext = ""
    for (let index = 0; index < text.length; index++) {
        if ((index % 2) === 0) {
          newtext += text[index].toLowerCase()
        }
        else {
          newtext += text[index].toUpperCase()
        }
    }
    setText(newtext)
    props.showAlert('Alternate character case changed', 'success');
  }

  // const vowelCheck = ()=>{
  //   const count = text.match(/[aeiou]/gi).length;
  //   setText("You have "+count + " no of vowels");
  // }

  // const consonentCheck = ()=>{
  //   const count = text.length - text.match(/[aeiou]/gi).length;
  //   setText("You have "+count + " no of consonents");
  // }

  const handleCopy = () => {
    const text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copy to clipboard!', 'success');
  }

  const removeExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra space removed!', 'success');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container my-4" style={{color: props.themeBucket[props.mode].color}}>
          <h3>{props.heading}</h3>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor: props.themeBucket[props.mode].bg, color: props.themeBucket[props.mode].color }} onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
          </div>
          <div className="btn-container d-flex justify-content-between">
            <button className="btn btn-primary btn-sm" onClick={handleUpperCase}>Upper</button>
            <button className="btn btn-primary btn-sm" onClick={handleLowerCase}>Lower</button>
            <button className="btn btn-primary btn-sm" onClick={removeExtraSpaces}>Extra space</button>
            <button className="btn btn-primary btn-sm" onClick={handleCapitalizeClick}>Capitalize</button>
            <button className="btn btn-primary btn-sm" onClick={handleRedundancy}>Redundent</button>
            <button className="btn btn-primary btn-sm" onClick={handleAbreviation}>Abreviate</button>
            <button className="btn btn-primary btn-sm" onClick={onAlternatingCase}>Alternate Case</button>
            {/* <button className="btn btn-primary btn-sm" onClick={vowelCheck}>Vowel Count</button>
            <button className="btn btn-primary btn-sm" onClick={consonentCheck}>Consonent Count</button> */}
            <button className="btn btn-primary btn-sm" onClick={handleExtractEmail}>Email extract</button>
            <button className="btn btn-primary btn-sm" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary btn-sm" onClick={handleClearText}>Clear</button>
          </div>
          <div className="my-3">
            <h3>Your text summary</h3>
            <p>{ text ? text.split(' ').filter(function(t) {return t!== ''}).length : 0 } words, { text.length } characters</p>
            <p>{ text ? Math.ceil(0.008 * text.split(' ').length) : 0 } minutes to read!</p>
            <h3>Preview</h3>
            <p>{ text ? text : 'Enter something to preview...' }</p>
          </div>
      </div>
      
    </>
    
  )
}

export default TextForm
