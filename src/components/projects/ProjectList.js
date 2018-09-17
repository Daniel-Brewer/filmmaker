import React, { Component } from 'react'
import { Link } from "react-router-dom"
import projects_pic from "./projects_pic.jpg"
import "./project.css"

class ProjectList extends Component {
    state = {
        projectName: "",
        details: "",
        isNeeded: false
    }

    render() {
        const complete = { isNeeded: true }

        return (<React.Fragment>

            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                    <button onClick={() => {
                        localStorage.clear("credentials")
                        document.location.href = 'http://localhost:3000'
                    }}
                        className="logoutButton">Logout</button>
                </div>
            </nav>
            <form className="projectListForm">
                <div className="projectButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() =>
                            this.props.history.push("/projects/new")

                        }>
                        Click to add your Project
                </button>
                </div>
                <section className="projects">
                    {
                        this.props.projects.map(project =>
                            <div key={project.id} className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {project.projectName}
                                    </h4>
                                    {/* <h6 className="card-title">
                                        <img src={projects_pic} alt="" className="icon--project" />
                                    </h6> */}
                                    <h6>
                                        <br></br>
                                        {project.detail}
                                        <br></br>

                                        <Link className="nav-link" to={`/dashboard/${project.id}`}>Project Dashboard</Link>
                                        <button
                                            onClick={() => this.props.deleteProject(project.id)}
                                            className="card-link btn btn-primary btn-sm">Delete Project</button>
                                            <br></br>
                                            <br></br>
                                            <button
                            onClick={() => this.props.history.push(`/projects/edit/${project.id}`)}
                            className="card-link">Edit</button>
                                    </h6>
                                </div>
                                <label>
                                    <button
                                        onClick={() => this.props.editProject(project.id, complete)
                                        }
                                        className="card-link btn btn-secondary btn-lg btn-block">Completed
                                         </button>

                                    {/* {id} */}
                                </label>
                            </div>
                        )
                    }
                </section>
            </form>

        </React.Fragment>
        )
    }
}

export default ProjectList;