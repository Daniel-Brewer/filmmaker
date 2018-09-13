import React, { Component } from "react"

export default class ProjectDetail extends Component {
    render() {
        /*
            Using the route parameter, find the project that the
            user clicked on by looking at the `this.props.projects`
            collection that was passed down from ApplicationViews
        */
        const project = this.props.projects.find(t => t.id === parseInt(this.props.match.params.projectId, 0)) || {}

        return (
            <section className="project">
                <div key={project.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">{project.name}</h4>
                        <br></br>
                        {/* <h6>plays</h6> */}
                        {/* <h5 className="card-title"> plays </h5>
                        <h5 className="card-title"> {project.characterName} </h5>
                        <br></br> */}
                        <h6 className="card-title">{project.details}</h6>
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
        )
    }
}