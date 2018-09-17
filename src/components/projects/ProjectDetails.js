import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class ProjectDetail extends Component {
    render() {
        /*
            Using the route parameter, find the project that the
            user clicked on by looking at the `this.props.projects`
            collection that was passed down from ApplicationViews
        */
        const project = this.props.projects.find(t => t.id === parseInt(this.props.match.params.projectId, 0)) || {}

        return (<React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <button onClick={() => {
                        localStorage.clear("credentials")
                        document.location.href = 'http://localhost:3000'
                    }}
                        className="logoutButton">Logout</button>
                </li>
            </ul>
        </nav>
            <section className="project">
                <div key={project.id} className="detail-card">
                    <div className="card-body">

                        <h4 className="card-title">{project.projectName}</h4>
                        <br></br>
                        <h6 className="card-title">{project.projectDate}</h6>
                        <br></br>
                        <h6 className="card-title">{project.projectTime}</h6>
                        <br></br>
                        <button
                            onClick={() => this.props.deleteProject(project.id)
                                .then(() => this.props.history.push("/projects"))}
                            className="card-link ">Delete</button>
                        <button
                            onClick={() => this.props.history.push(`/projects/edit/${project.id}`)}
                            className="card-link">Edit</button>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}