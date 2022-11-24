import React, { useState } from 'react'

const TextForm = (props) => {
    

    const [text, setText] = useState('')

    
    const handleUpClick = () => {
        // console.log(text.toUpperCase())
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Coverted to Uppercase', 'success')
    }

    const handleOnChange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Coverted to Lowercase', 'success')
    }

    const clearArea = () => {
       setText('')
       props.showAlert('Text Box Cleared', 'success')
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        // alert("Copied the text: " + text);
        props.showAlert('Copied to Clipboard', 'success')

    }

    const handlecapitalize= () => {
        let newText = text.split(" ")
        console.log(newText)
        for (let i = 0; i<newText.length; i++){
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
            }
        // console.log(newText);
        setText(newText.join(" "));
        props.showAlert('Converted to Capitalize case', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra Spaces Removed', 'success')
    }

 
    let count = text.split(/\s/).filter((element)=>{return element.length !== 0}).length;

    // if(text!==("")){document.title=`TextAmplify - Home ${count}`} else {document.title=`TextAmplify - Home`}
   




  return (
    <div>
        <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="8" style={{backgroundColor: props.mode === 'light'?'#f8f9fa':'#274760', color: props.mode === 'light'?'black':'white'}}></textarea>
            </div>
            <button disabled={text.length === 0} onClick={clearArea} className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-1`}>Clear Text</button>

            <button disabled={text.length === 0} onClick={handleUpClick} className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-1`}>Convert to UPPERCASE</button>

            <button disabled={text.length === 0} onClick={handleLowClick} className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-1`}>Convert to lowercase</button>

            <button disabled={text.length === 0} onClick={handleCopy} className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-1`}>Copy Text</button>

            <button disabled={text.length === 0} onClick={handleExtraSpaces} className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-1`}>Remove Extra Spaces</button>

            <button disabled={text.length === 0} onClick={handlecapitalize} className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-1`} >Capitalize</button>


        </div>
        <div className={`container py-5 text-${props.mode === 'light'?'dark':'light'}`}>
            <h2>Your Text Summary</h2>
            <p>{count} Words and {text.length} Characters</p>
            
            <p>{0.008 * count}  Minutes read</p>
        </div>
        
        <div className={`container pb-5 text-${props.mode === 'light'?'dark':'light'}`}>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview it here...'}</p>
        </div>

        {/* modal */}
        {/* <div id='findnreplace'>This is a modal</div> */}

    </div>
  )
}

export default TextForm