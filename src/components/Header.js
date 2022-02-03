import React from 'react';

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar__header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img srcSet="https://drive.google.com/uc?id=1wqByC00aFqABdF3czmhNY2-nZevu46cl" alt="" width="30" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#bienvenida">Bienvenida</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#educacion">Mis intereses</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mis proyectos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#proyecto1">Proyecto 1</a></li>
                                    <li><a className="dropdown-item" href="#proyecto2">Proyecto 2</a></li>
                                    <li><a className="dropdown-item" href="#proyecto3">Proyecto 3</a></li>
                                    <li><a className="dropdown-item" href="#proyecto4">Proyecto 4</a></li>
                                    <li><a className="dropdown-item" href="#proyecto5">Proyecto 5</a></li>
                                    <li><a className="dropdown-item" href="#proyecto6">Proyecto 6</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experiencia">Experiencia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contáctame</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outdline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Header;