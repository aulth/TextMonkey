import React,{useState} from 'react'

export default function About(props) {
    let darkText = '#222831', lightText = '#EEEEEE';
    let darkBg = '#222831', lightBg = 'white';
    // const [myStyle, setMyStyle] = useState({
    //     color: lightText,
    //     backgroundColor: lightBg,
    // })
    // const [btnText, setBtnText] = useState('Enable Dark Mode');
    // const switchMode = ()=>{
    //     if(myStyle.color === lightText){
    //         setMyStyle({
    //             color: darkText,
    //             backgroundColor: darkBg
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //     else{
    //         setMyStyle({
    //             color: lightText,
    //             backgroundColor: lightBg
    //         })
    //         setBtnText('Enable Dark Mode');
    //     }
    // }

    return (
        <>
        <div className="container p-3 rounded" style={{backgroundColor:props.mode==='light'?lightBg:darkBg, color:props.mode==='light'?darkText:lightText}}>
            <h2>About</h2>
            <p>
                {props.appName} is a simple text editor.
                You can use it to tranform your sentences into Upper Case,
                Lower Case, Title Case, Sentence Case, Remove double space,
                and calculate the time you spend reading the text.
            </p>
            {/* <button onClick={switchMode} className="btn btn-secondary">{btnText}</button> */}
        </div>
        </>
    )
}