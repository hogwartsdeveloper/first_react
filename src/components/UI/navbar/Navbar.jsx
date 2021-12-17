import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import Button from "../button/Button";
import classes from './Navbar.module.css';


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <nav className={classes.navbar}>
            <div className={classes.brand}>
                <Link to='/'>Post See</Link>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        
                    </li>
                </ul>
                <Button onClick={logout}>Logout</Button>
            </div>
        </nav>
    );
};

export default Navbar;