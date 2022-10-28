import React,{useState} from 'react'

export default function TextForm() {
    
    
    const wordCount=()=>{
        let word = text.split(" ");
        let wlength = word.length;
        while(word[wlength-1]===" " || word[wlength-1]===""){
            wlength--;
        }
        return wlength;
    }
    const changeit=(event)=>{
        changeText(event.target.value); 
    }

    const upper=()=>{
        let newText = text.toUpperCase();
        changeText(newText);
    }

    const lower=()=>{
        let newText = text.toLowerCase();
        changeText(newText);
    }

    const clearit=()=>{
        changeText("");
    }
    const [text, changeText] = useState("");
  return (
      <>

      <div className='container'>
        <h2>Enter the text below to analyze it</h2>
      <div className="mb-3">
  <label htmlFor="tarea" className="form-label">Example textarea</label>
  <textarea value={text} onChange={changeit} className="form-control" id="tarea" rows="5"></textarea>
  <div className='my-3'>
  <button onClick={upper} className="btn btn-primary">Change to uppercase</button>
  <button onClick={lower} className="btn btn-primary mx-2">Change to lowercase</button>
  <button onClick={clearit} className="btn btn-primary">Clear it!</button>
  <h2>Summary</h2>
  <p>The above text consist of {wordCount()} words and {text.length} characters</p>
  <p>Total reading time needed for the above text is {wordCount()*0.008} minutes</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>

</div>
    </div>
    </>
  )
}
