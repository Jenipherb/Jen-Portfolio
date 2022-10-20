import { Container, Image, Menu, Icon } from "semantic-ui-react";
import Footer from "./Footer";


function Landing() {
    console.log("that")
    return (
      <div style={{backgroundColor: "#ded8ee", height: "auto"}}>
        <br></br>
        <Image
         src={require("../Images/jen-image.jpg")}
         alt='profile-pic'
         circular
         centered
         size="medium"/>
         <br></br>
         <Container>
            <h3>Hello, I am a product-focused fullstack developer based in Denver.  Recent Flatiron School graduate, open to any full-time opportunities in software engineering.</h3>
        </Container>
        <br></br>
        <Menu.Item
                    href="https://github.com/Jenipherb"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px", color: "#808080"}}
                >
                    <Icon name="github" size="big" /> Github
                </Menu.Item>
                
                <Menu.Item
                    href="https://www.linkedin.com/in/jenipher-belloso/"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px", color: "#808080"}}
                >
                    <Icon name="linkedin" size="big" /> Linkedin
                </Menu.Item>
                <Menu.Item
                    href="mailto:jenipherbelloso@gmail.com"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px", color: "#808080"}}
                >
                    <Icon name="mail" size="big" /> Email
                </Menu.Item>
                <Menu.Item
                    href="http://www.discordapp.com/users/435651787547213859"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px", color: "#808080"}}
                >
                    <Icon name="discord" size="big" /> Discord
                </Menu.Item>
               <br></br>
               <Footer/> 
               
      </div>
    );
  };
  
  export default Landing;
  