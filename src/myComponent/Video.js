import React from 'react'
import '../css/Video.css'
function Video() {
    return (
        <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jcOKU9f86XE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video
