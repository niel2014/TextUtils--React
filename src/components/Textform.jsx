import React, {useState} from 'react';

export default function Textform(props) {
    const handleLower = (event) => {
        const newText = text.toLowerCase();
       setText(newText);
       props.showAlert('Converted to Lowercase','success');
    }
    
    const handleUpper = (event) => {
       setText(text.toUpperCase());
       props.showAlert(' Converted to uppercase','success');
    }

    const handleChange = (event) =>{
        setText(event.target.value);
        
    }

    const handleReset = (event) =>{
        setText("");
        props.showAlert('Textarea cleared','success');
    }

    const handleSpaces = () =>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed','warning');
    }

    const handleCopy = () =>{
        let text = document.getElementById('refText');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied','success');
    }
    const [text, setText] = useState("Enter text to Analyse");

  return (
    <>
    <div className='mt-3' style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
        <h2 style={{textAlign:'left'}}>{props.heading}</h2>
        <div className="mb-3" style={{textAlign:'left'}}>
            <textarea className="form-control" value={text} id="refText" rows="8" onChange={handleChange}></textarea>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpper}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleLower}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleReset}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleSpaces}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy to Clipboard</button>
        </div>
        
    </div>
    <div className="container my-3" style={props.mode==='dark'?{color:'white',textAlign:'left'}:{color:'black',textAlign:'left'}}>
        <h2>Your text summary</h2>
        <p>{text.length} characters and {text ? text.split(' ').length : 0} words</p>
    </div>
    <div className="container my-3" style={props.mode==='dark'?{color:'white',textAlign:'left'}:{color:'black', textAlign:'left'}}>
        <h2>Preview</h2>
        <p>{text? text : 'No text to preview'}</p>
    </div> 
    </>
  )
}
