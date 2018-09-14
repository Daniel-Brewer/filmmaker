import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './navBar.css'


class NavBar extends Component {


    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/castMembers">Cast</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/crewMembers">Crew</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/notes">Director's Notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/scenes">Scenes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/sceneProps">Props</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/locations">Locations</Link>
                    </li>
                </ul>
                <button onClick={() => {
                    localStorage.clear("credentials")
                    document.location.href='http://localhost:3000'
                }}
                className="logoutButton">Logout</button>
                </nav>
            )
        }
    }
    
export default NavBar