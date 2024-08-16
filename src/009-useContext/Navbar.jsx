import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>
                    <div >
                        <ul className="navbar-nav">
                            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"  }>
                                Home
                            </NavLink>

                            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"  }>
                                About
                            </NavLink>

                            <NavLink to="/login" className={({isActive}) => isActive ? "nav-link active" : "nav-link"  }>
                                Login
                            </NavLink>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                            </li> */}
                            {/* <li className="nav-item">
                            <Link className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
    // <>
    //     <Link to="/">Home</Link>
    //     <Link to="/login">Login</Link>
    //     <Link to="/about">About</Link>
    // </>
  )
}
