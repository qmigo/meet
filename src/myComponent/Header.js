import React from 'react'
import '../css/Header.css'
function Header({login_id}) {
    return (
        <div className="header">
            
                <h1>Meet</h1>
                <div className="user">{login_id}</div>
           
        </div>
    )
}

export default Header
