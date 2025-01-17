import { Link } from 'react-router'
import './header.css'


export const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src="/images/logo.png" alt="imagem" />
            </div>
            <li>
                <Link to={"/"}>
                    FeTechInovs
                </Link>
            </li>
        </header>
    )
}