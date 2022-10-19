import { Menu } from "semantic-ui-react"
import { Link } from 'react-router-dom'


const NavBar =() => {
    console.log("what")


    const styleNav = {
          backgroundColor: "#eccedc",
          color: "black",
        }
    return(
        <div>
            <Menu style={styleNav}>
                <Menu.Item>
                    <Link to='/'><h3>Jenipher Belloso</h3></Link>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Link to='/projects'><h3>Projects</h3></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/blogs'><h3>Blogs</h3></Link>
                </Menu.Item>
                <Menu.Item>
                <Link to='/resume'><h3>Resume</h3></Link>
            </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar