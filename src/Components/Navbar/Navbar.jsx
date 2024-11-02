import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <div class="navbar bg-base-100">
                    <div class="navbar-start">
                        <div class="dropdown">
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li><NavLink to={'/'}>Home</NavLink></li>
                                        <li><NavLink to={'/listed'}>Listed Books</NavLink></li>
                        </ul>
                        </div>
                        <a class="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal px-1">
                                        <li><NavLink to={'/'}>Home</NavLink></li>
                                        <li><NavLink to={'/listed'}>Listed Books</NavLink></li>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <a class="btn">Button</a>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;