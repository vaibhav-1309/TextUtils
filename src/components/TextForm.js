import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")
    }

    const wordCount = ()=> {
        for (let i = 0; i < text.split(" ").length; i++){
            let count = 0;
            if (text.split(" ")[i] === ""){
                count++;
            }
            return (text.split(" ").length)-count;
        }
    }
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#063065'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#063065'}} id="myBox" rows="4"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'#063065'}}>
            <h2>Your text summary</h2>
            <p>{wordCount(text)} words, {text.length} characters</p>
            <p>Approximately {0.008 * wordCount(text)} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length> 0? text:"Enter something in the textbox above to preview"}</p>
        </div>
        </>
    )
}
