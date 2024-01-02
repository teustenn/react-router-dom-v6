import { Link } from 'react-router-dom'

import './style.css'

export const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}