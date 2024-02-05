import React, {useState} from 'react'

export default function Textform(props) {

    

    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick=()=>{
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleClearClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy =()=>{
        console.log("On Copy")
        var text=document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy Clipboard!","success");
    }
    const handleExtraspaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces!","success");
    }

const [text, setText] = useState('Enter text here');


  return (
    <>
    <div className="container" style={{Color:props.mode ==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="MyBox" className="form-label">Type Here </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark' ? 'gray' : 'white' , color:props.mode ==='dark' ? 'white' : 'darkslategrey'}}id="MyBox" rows="3"></textarea>
        </div>
        <button className="btn btn-info mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-success mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-secondary mx-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-warning mx-3" onClick={handleExtraspaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-3" onClick={handleClearClick}>Clear Text</button>
       
    </div>
    <div className="container my-3" style={{Color:props.mode ==='dark' ? 'white' : 'black'}}>
        <h1> Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box  above to preview it here"}</p>
    </div>
    
</>
  )
}
