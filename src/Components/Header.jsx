import { Link } from 'react-router-dom'
import logo from "../assets/logo for paragon.png"

const Header = () => {
    return (
        <div>
            <header className='flex items-center justify-between p-2 bg-orange-300'>
                <div className='flex items-center'>
                    <img src={logo} alt="Logo for Paragon" className='h-12 w-auto' />
                    <h2 className='font-semibold font-serif text-lg'>PARAGON CONSTRUCTIONS</h2>
                </div>
                <nav className=''>
                    <ul className='flex gap-6 text-white p-2'>
                        <Link to="/">HOME</Link>
                        <Link to="services">SERVICES</Link>
                        <li>ABOUT</li>
                        <li>PROJECTS</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}

export default Header
