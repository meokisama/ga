import "./Logo.scss"
import logo from "../../assets/logo.png"
import logoBG from "../../assets/logo-bg.png"

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