import { useState } from 'react';

export default function TextForms() {
    const handleOnClick=(event)=>{
        console.log("Click ");
        setText(event.target.value);
        
    }
    const handleUpper =  ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowwer=()=>{
        let newT = text.toLowerCase();
        setText({color: 'blue'});
    }
    const colorRed=()=>{
        let nText = text
    }
     const [text, setText] = useState('Enter text');
  return (
    <div>
   
      <div class="mb-3">
     <label for="exampleFormControlTextarea1" class="form-label">Write You Want</label>
     <div className="container">
        
     <textarea class="form-control" onChange={handleOnClick} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
     
     <button type="button" onClick={handleUpper} class="btn btn-primary btn-lg my-3 mx-2">Upper Case</button>
     <button type="button" onClick={handleLowwer} class="btn btn-primary btn-l mx-2g">Lower Case</button>
     <button type="button" onClick={colorRed} class="btn btn-primary btn-lg mx-2">color red</button>
     <div>
        <p>Text Summary</p>
        <p>Charcters: {text.length}</p>
        <p>Words: {text.split(" ").length-1}</p>
        <p>{text}</p>
     </div>
     </div>
    </div>
    </div>
  );
}
