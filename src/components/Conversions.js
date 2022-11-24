import React, { useState } from 'react'

const Conversions = (props) => {


    const [text, setText] = useState('')

    const [newArray, setNewArray] = useState('')

    const clearArea = () => {
        setText('')
        setNewArray('')
        props.showAlert('Text Box Cleared', 'success')
     }

    const handleOnChange = (event) => {
        // console.log("onchange")
        setText(event.target.value)
    }
   

    const clickForTable = () => {
        let arr = [];
        let newText;
        for (var i=1; i<=10; i++){
            newText = text * i;
            arr.push(newText);
            }
        // setText(arr);
        setNewArray(arr.join("\n"));
        props.showAlert('Done', 'success')
    }

    const clickForEvenNum = () => {
        let arr= [];
        for (var i=1; i<=text;i++){
            if(i%2 === 0){
                arr.push(i)
            }else{}
        }
        setText(arr.join(", "));
        setNewArray(arr.join("\n"));
        // console.log(arr)
        
    }

    const clickForConvert = () => {
        let newText = text * 0.621371
        setText(newText)
        setNewArray(text + ' KM = ' + newText + ' Mile')

        
        const booleanNum = () => {
            return text % 10 === 0 ? true : false
        }

        console.log(booleanNum())
        
    }

    const clickForAddition = () => {
        function toNumber(value) {return Number(value);}
        let newText = text.split(", ").map(toNumber).reduce((partialSum, a) => partialSum + a, 0)
        setNewArray('Your Total is ' + newText)
        setText(newText)  
    }

    
    



  return (
    <div>
    <div className={`container py-5 text-${props.mode === 'light'?'dark':'light'}`}>
        <h1 className='mb-4'>Enter your number(s) to convert</h1>
        <textarea className="p-2 form-control" onChange={handleOnChange} id="myBox" value={text} rows="5" style={{backgroundColor: props.mode === 'light'?'#f8f9fa':'#343a40', color: props.mode === 'light'?'black':'white'}}></textarea>
        <button disabled={text.length === 0} onClick={clearArea} className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-2`}>Clear Text</button>
        <button disabled={text.length === 0} onClick={clickForTable} type="button" className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-2`}>Click to Create a Table</button>
        <button disabled={text.length === 0} onClick={clickForEvenNum} type="button" className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-2`}>Print Even numbers</button>
        <button disabled={text.length === 0} onClick={clickForConvert} type="button" className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-2`}>Convert KM to Mile</button>
        <button disabled={text.length === 0} onClick={clickForAddition} type="button" className={`btn btn-${props.mode === 'light'?'primary':'secondary'} mx-1 my-2`}>Add Multiple Numbers</button>

        <h2 className='mt-5'>Result:</h2>
        <p style={{whiteSpace:'pre'}}>{newArray}</p>
        
    </div>
    
    
    
            
    </div>
    
  )
}

export default Conversions
