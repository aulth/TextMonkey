import React, {useState} from 'react'

export default function TextForm(props) {
    const darkText = '#222831', lightText = '#EEEEEE';
    const darkBg = '#222831', lightBg = 'white';
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert('success', 'Text converted to UPPER CASE');
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert('success', 'Text converted to LOWER CASE');
    }
    const handleTitleCaseClick = ()=>{
        setText(text.split(' ').map(item=>item[0].toUpperCase()+item.slice(1).toLowerCase()).join(' '));
        props.showAlert('success', 'Text converted to TITLE CASE');
    }
    const handleSentenceCaseClick = ()=>{
        setText(text.split('. ').map(item=>item[0].toUpperCase()+item.slice(1).toLowerCase()).join('. '));
        props.showAlert('success', 'Text converted to SENTENCE CASE');
    }
    const handleClearClick = ()=>{
        setText('');
        props.showAlert('success', 'Text cleared');
    }
    const handleCopyClick= ()=>{
        selectText();
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Copied to clipboard');
        setTimeout(()=>{
        document.getSelection().removeAllRanges();
        }, 100);
    }
    const handleRemoveExtraSpaceClick = ()=>{
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert('success', 'Extra space removed');
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const selectText = ()=>{
        document.getElementById('myText').select();
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div style={{backgroundColor:props.mode==='light'?lightBg:darkBg, color : props.mode ==='light'?darkText:'#EEEEEE'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#222831', color:props.mode==='light'?darkText:lightText}} onChange={handleOnChange} onClick={selectText} value={text} id="myText" rows="8"></textarea>
            <p  className='my-2' >{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters, {text.split('\n').length} Paragraphs, {text.split('.').length} Sentences</p>
            <p>{(0.00369 * text.split(' ').length).toFixed(2)} minutes read</p>
            </div>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleTitleCaseClick}>Title Case</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleSentenceCaseClick}>Sentence Case</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCopyClick}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleRemoveExtraSpaceClick}>Remove extra spaces</button>
        </div>
    )
}
