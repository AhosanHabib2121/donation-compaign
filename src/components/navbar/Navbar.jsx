import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import './Navbar.css'

const Navbar = () => {
    const navLstyle = {
        fontSize: '18px',
        fontWeight: '700',
    }
    const menu = (
        <>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                style={navLstyle}

              to="/">Home</NavLink>
            <NavLink to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                style={navLstyle}
            >Donation</NavLink>
            <NavLink to="/statistics"
                style={navLstyle}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >Statistics</NavLink>
        </>
    )
  return (
    <div >
        <div className="lg:navbar px-10 md:px-24 lg:py-6 py-6">
            <div className="lg:navbar-start flex gap-36 lg:gap-0 items-center justify-between">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                    </label>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
                      >
                        {menu}
                        
                     
                    </ul>
                </div>
                <div>
                    <img className="lg:w-3/4" src={logo} alt="logo" />
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    {menu}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
