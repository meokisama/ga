import "./Logo.scss"
import logo from "../../assets/logo.webp"
import logoBG from "../../assets/logo-bg2.webp"

function Logo() {
    return (
        <div className="logoPerform">
            <div className="container">
                <img id="logo" alt="Logo" src={logo} />
                <img id="logoBG" alt="LogoBG" src={logoBG} />
            </div>
        </div>
    );
}

export default Logo;