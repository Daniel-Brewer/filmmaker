import React, { Component } from 'react'
import './dashboard.css'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
export default class Dashboard extends Component {

    render() {
        // let styles = {
        //     backgroundImage: "url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indiawilds.com%2Fimages%2FSabyasachi_about.jpg&f=1) no-repeat center center fixed",
        //     WebkitBackgroundSize: "cover",
        //     MozBackgroundSize: "cover",
        //     OBackgroundSize: "cover",
        //     backgroundSize: "cover"
        // }
        return (<React.Fragment>

            <div>
            <nav className="navbar navbar-light fixed-top dark-blue flex-md-nowrap p-0 shadow">
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
            </div>
            </React.Fragment>
        )
    }

}
