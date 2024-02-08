import './Footer.scss'
import logo from '../../assets/logo.webp'
import OutlineText from '../OutlineText';

function Footer() {
    return (
        <div className='footer'>
            <OutlineText content="Ranobe Giveaway Booster" />
            <div>
                <p>©Background is based on layout of Kadokawa Sneaker Bunko 35th Anniversary</p>
                <img src={logo} alt='Ranobe Giveaway Booster' />
                <p>©Ranobe Giveaway Booster 2024</p>
            </div>
        </div>
    );
}

export default Footer;