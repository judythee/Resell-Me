import { Link,NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/resellme-logo.svg"
import { ReactComponent as Tabler } from "../assets/images/tabler_window.svg"

const Footer = () => {
  return (
    <footer>
        <div className="wrapper">
            <div className="logo">
                <Link to='/'><Logo className="logo-img" /></Link>
            </div>
            <div className="links">
                <h3>Libraries & Plugins</h3>
                <ul>
                    <li><NavLink to="/" href="">SDKs</NavLink></li>
                    <li><NavLink to="/" href="">WHMCS Plugin</NavLink></li>
                    <li><NavLink to="/" href="">WordPress Plugin</NavLink></li>
                </ul>
            </div>
            <div className="links">
                <h3>Community</h3>
                <ul>
                    <li><NavLink to="/" href="">Facebook<Tabler className="tabler"/></NavLink></li>
                    <li><NavLink to="/" href="">Developer Forums<Tabler className="tabler"/></NavLink></li>
                    <li><NavLink to="/" href="">Twitter<Tabler className="tabler"/></NavLink></li>
                </ul>
            </div>
            <div className="links">
                <h3>More</h3>
                <ul>
                    <li><NavLink to="/" href="">Blog</NavLink></li>
                    <li><NavLink to="/" href="">Docs</NavLink></li>
                    <li><NavLink to="/" href="">About Us</NavLink></li>
                    <li><NavLink to="/" href="">Terms of Service</NavLink></li>
                    <li><NavLink to="/" href="">Privacy Policy</NavLink></li>
                </ul>
            </div>
        </div>
        <div className="copy">
            <p>Copyright © 2022 Resellme.</p>
        </div>
    </footer>
  )
}

export default Footer