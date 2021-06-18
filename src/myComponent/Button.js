import React from 'react'
import '../css/Button.css'
function button({title,url}) {
    return (
        <div className="button">
           
            <a href={url}>{title}</a>
            
        </div>
    )
}

export default button
