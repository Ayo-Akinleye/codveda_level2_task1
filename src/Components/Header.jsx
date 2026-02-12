import { NavLink } from 'react-router-dom'
import logo from "../assets/logo for paragon.webp"

const Header = () => {
    const linkClasses = "py-1 px-2 hover:bg-white hover:text-orange-400 hover:rounded-lg";

    return (
        <div>
            <header className='flex items-center justify-between p-2 bg-orange-300 h-16'>
                <div className='flex items-center'>
                    <img src={logo} alt="Logo for Paragon" className='h-12 w-auto' />
                    <h2 className='font-semibold font-serif text-lg'>PARAGON CONSTRUCTIONS</h2>
                </div>
                <nav>
                    <ul className='flex gap-4 text-black font-semibold items-center justify-center'>
                        {/* HOME */}
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${linkClasses} bg-white text-orange-400 rounded-lg`
                                        : linkClasses
                                }>HOME
                            </NavLink>
                        </li>

                        {/* SERVICES */}
                        <li>
                            <NavLink to="services"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${linkClasses} bg-white text-orange-400 rounded-lg`
                                        : linkClasses
                                }>SERVICES
                            </NavLink>
                        </li>

                        {/* ABOUT */}
                        <li>
                            <NavLink to="about"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${linkClasses} bg-white text-orange-400 rounded-lg`
                                        : linkClasses
                                }>
                                ABOUT
                            </NavLink>
                        </li>

                        {/* PROJECTS */}
                        <li>
                            <NavLink to="projects"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${linkClasses} bg-white text-orange-400 rounded-lg`
                                        : linkClasses
                                }>
                                PROJECTS
                            </NavLink>
                        </li>

                        {/* CONTACT */}
                        <li>
                            <NavLink to="contact" className={({ isActive }) =>
                                isActive
                                    ? `${linkClasses} bg-white text-orange-400 rounded-lg`
                                    : linkClasses
                            }>
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}

export default Header
