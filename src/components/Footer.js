import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <p className='my-2' style={{textAlign:'center',color:props.mode==='light'?'#222831':'#EEEEEE'}} >Created with <span className='mx-2' style={{color:'red'}} >&#9829;</span> by <a className='text-decoration-none color-primary' href="https://aulth.github.io/usman">Mohd Usman</a> </p>
        </div>
    )
}
