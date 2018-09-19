import React, { Component } from 'react'
import { Link } from "react-router-dom"
import projects_pic from "./projects_pic.jpg"

import "./project.css"

class ProjectList extends Component {

    state = {
        projectName: "",
        projectDate: "",
        projectTime: "",
        user: this.props.activeUser.id,
    }

    render() {


        return (<React.Fragment>
            {/* logout button clears credentials */}
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                    <button onClick={() => {
                        document.location.href = 'http://localhost:3000'
                    }}
                        className="logoutButton">Logout</button>
                </div>
            </nav>
            {/* when add button is clicked page re-renders with project form  */}
            <form className="projectListForm">
                <div className="projectButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() =>
                            this.props.history.push("/projects/new")

                        }>
                        Add Project
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
                                    {/* add image to card */}
                                    {/* <h6
                                        className="img-responsive">
                                        <img src={projects_pic} alt="" className="icon--project" />
                                    </h6> */}
                                    <h6>Filming begins
                                        <br></br>
                                        {project.projectDate}
                                    </h6>
                                    <br></br>
                                    <h6>Call Time
                                        <br></br>
                                        {project.projectTime}
                                    </h6>
                                    <br></br>
                                    {/* buttons to all the category paths. Do I need to add project.id in these? */}
                                    <div className="castMemberButton">
                                        <button type="button"
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.props.history.push("/castMembers")}>
                                            Cast Members
                </button>
                                    </div>
                                    <br></br>
                                    <div>
                                        <button type="button"
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.props.history.push("/crewMembers")

                                            }>
                                            Crew Members
                </button>
                                    </div>
                                    <br></br>
                                    <div className="locationButton">
                                        <button type="button"
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.props.history.push("/locations")
                                            }>
                                            Locations
                </button>
                                    </div>
                                    <br></br>
                                    <div className="notesButton">
                                        <button type="button"
                                            className="btn btn-success"
                                            onClick={() => {
                                                this.props.history.push("/notes")
                                            }
                                            }>
                                            Notes
                    </button>
                                    </div>
                                    <br></br>
                                    <div className="scenePropButton">
                                        <button type="button"
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.props.history.push("/sceneProps")

                                            }>
                                            Scene Props
                </button>
                                    </div>
                                    <br></br>
                                    <div className="sceneButton">
                                        <button type="button"
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.props.history.push("/scenes")

                                            }>
                                            Scenes
                </button>
                                    </div>
                                    <br></br>
                                    {/* delete and edit buttons interact with database */}
                                    <h6>
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
// const complete = { isNeeded: true }