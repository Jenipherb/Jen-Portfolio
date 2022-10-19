import { Image } from 'semantic-ui-react'

function Footer(){
    return(
        <div style=
        {{
        bottom: "0",
        left: "0",
        marginTop: "25px",
        width: "100%",
        backgroundColor: "#c2d9ee"
        }}>
            <h3>Technologies Used</h3>
            <Image src={require("../Images/techs.png")}
            alt="technologies" style={{position: "relative", height: "40xp", display: "block", marginLeft: "auto", marginRight: "auto"}}/>
        </div>
    )
}


export default Footer