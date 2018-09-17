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
                        Add your Project
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
                                    <h6
                                        className="card-img-top">
                                        <img src={projects_pic} alt="" className="icon--project" />
                                    </h6>
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
                                    <div className="castMemberButton">
                                        <button type="button"
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.props.history.push("/castMembers")
                                            }>
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
                                    <h6>
 

                                        {/* <Link className="nav-link" to={`/dashboard/${project.id}`}>Project Dashboard</Link> */}
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
                                    <div className="castMembers--movie">
                                        {
                                            this.props.castMembers
                                                .filter(cast => cast.projectId === project.id)
                                                .map(cast => <castMember key={cast.id} castMember={cast} {...this.props} />)
                                        }
                                    </div>
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

 //     render() {
    //         {
    //             return (
    //                 <section className="projects">
    //                     {
    //                         this.props.projects.map(project =>
    //                             <div key={project.id} className="card card--project">
    //                                 <div className="card-body">
    //                                     <h6 className="card-title">
    //                                         {/* <img src={projects_pic} alt="" className="icon--project" /> */}

    //                                             <br></br>
    //                                             {project.projectDate}
    //                                             <br></br>
    //                                             <Link className="nav-link" to={`/dashboard/${project.id}`}>Project Dashboard</Link>
    //                                             <button
    //                                                 onClick={() => this.props.deleteProject(project.id)}
    //                                                 className="card-link btn btn-primary btn-sm">Delete Project</button>
    //                                             <br></br>
    //                                             <br></br>
    //                                             <button
    //                                                 onClick={() => this.props.history.push(`/projects/edit/${project.id}`)}
    //                                                 className="card-link">Edit</button>                                      
    //                                         {/* </div> */}
    //                                         <label>
    //                                             <button
    //                                                 onClick={() => this.props.editProject(project.id)
    //                                                 }
    //                                                 className="card-link btn btn-secondary btn-lg btn-block">Completed
    //                                          </button>
    //                                         </label>
    //                                     </h6>
    //                                 </div>
    //                                 <h6 className="card-subtitle mb-2 text-muted">Cast Members</h6>
    //                                 <div className="castMembers--movie">
    //                                     {
    //                                         this.props.castMembers
    //                                             .filter(cast => cast.projectId === project.id)
    //                                             .map(cast => <castMember key={cast.id} castMember={cast} {...this.props} />)
    //                                     }
    //                                 </div>

    //                             </div>

    //                         )
    //                     }
    //                 </section>
    //             )
    //         }
    //     }
    // }