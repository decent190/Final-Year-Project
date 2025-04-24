import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#d4d4f1" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100 gap-2">
                            <li className="nav-item">
                                <a className="nav-link active text-black fs-bold" aria-current="page" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Code Editor</a>
                            </li>
                        </ul>
                        <div className="mx-auto gap-2 d-flex">
                            <button className="btn btn-outline-dark" type="submit">Login</button>
                            <button className="btn bg-dark text-white" type="submit">SignUp</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;