import Logo from "../../assets/img/oilBrokerLogo.jpg"
import "./index.css"

export const Title=()=>{
    return(
        <a href="/">
            <img  alt="logo" src={Logo} className="logo" />
        </a>
    )
}

const Header=()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul className="list">
                    <li className="first">Home</li>
                    <li className="second">About Us</li>
                    <li className="third">Why Us?</li>
                    <li className="fourth">Services</li>
                    <li className="fifth">Products</li>
                    <li className="sixth">Enquiry</li>
                </ul>
            </div>
        </div>
    )
}
export default Header