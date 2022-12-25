
import logoNew from '../../Assets/logoNew.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handleDarkTheme = () => {
        setDarkTheme(current => !current);
    };

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch( error => console.error(error))
    };

    return (
        <div>
            <div className="navbar bg-blue-200 border-4 border-slate-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to={'/'}><img className='h-5' src={logoNew} alt="" /> Electro Man</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={handleDarkTheme}>
                        {
                            darkTheme ? <h2 className='rounded mr-2 text-center'><FaToggleOff className='ml-2'/>Light</h2> : <h2 className='rounded mr-2'><FaToggleOn className='ml-2'/>Dark</h2>
                        }
                    </button>
                    <div>
                    {user?.photoURL ?
                        <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                            <div className="w-12 mask mask-hexagon">
                                <button><img src={user.photoURL} alt="" />
                                </button>
                            </div>
                        </div> :
                        <FaUser></FaUser>
                    }
                    </div>
                    <div className='w-12 md:w-24'>
                        {
                        user?.uid ? <Link onClick={handleLogOut} className="btn p-0 lg:p-3">Log Out</Link> :
                        <div>
                            <Link className="btn p-0 lg:p-3" to='/login'>Log In</Link>
                            {/* <Link className="btn" to='/register'>Register</Link> */}
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;