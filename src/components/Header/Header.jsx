import './Header.css'
import ProfilePic from '../../assets/profile.jpg'
import Logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <header className='Header'>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <nav>
                <img className='profile-pic' src={ProfilePic} alt="profile" />
                <p>Bem-vindo, Alberto</p>
            </nav>
        </header >
    )
} 