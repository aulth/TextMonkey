import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'30px'}} >
        {props.alert &&
        <div>
            <div style={{height:'30px',alignItems:'center',display:'flex'}} className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.msg} 
            </div>
        </div>
        }
        </div>
    )
}
