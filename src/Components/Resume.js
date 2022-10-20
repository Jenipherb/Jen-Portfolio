import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


const Resume = () => {

  const resumeStyle = { height: "1035px", width: "100%", overflow: "auto" }
  const buttonStyle = {display: "initial", position: "absolute", top: "15px",left: "15px", backgroundColor: "#e8eed8"}
  
  const resumeView = "https://docs.google.com/document/d/17OkLLV9Z241ItpoZqg3354F8ByGZQ2CuCp2ADjRPUoc/preview?usp=sharing"
  const resumeDownload = "https://docs.google.com/document/d/17OkLLV9Z241ItpoZqg3354F8ByGZQ2CuCp2ADjRPUoc/preview?usp=sharing"

  return (
    <div style={{position: "relative"}}>
    <a>Download</a>
      <iframe id='resume-frame' src={resumeView} style={resumeStyle}></iframe>

    </div>
  )
}

export default Resume