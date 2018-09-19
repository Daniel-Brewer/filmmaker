import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
export default class ProjectEditForm extends Component {

    state = {

    }
    // update state upon edits to fields
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId, 0))
        this.setState(project);
    }
    constructNewProject = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        let newProject = {
            projectName: this.state.projectName,
            projecDate: this.state.projectDate,
            projectTime: this.state.projectTime,
            user: this.props.activeUser.id,
            id: this.state.id
        }
        // passing in function from DM
        this.props.editProject(newProject.id, newProject)
            .then(() => {
                this.props.history.push(`/projects/${this.props.match.params.projectId}`)
            })
    }


    // in this form be sure to add existing STATE INFO in PLACEHOLDER>
    render() {
        return (
            <React.Fragment>
                <div>
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
                    <form className="projectForm">
                        <div className="form-group">
                            <label htmlFor="projectName">Project Name</label>
                            <input type="text" required={true}
                                onChange={this.handleFieldChange}
                                id="projectName"
                                placeholder={this.state.projectName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectDate">Date</label>
                            <input type="date" required={true}
                                onChange={this.handleFieldChange}
                                id="projectDate"
                                placeholder={this.state.projectDate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectTime">Call Time</label>
                            <input type="time" required={true}
                                onChange={this.handleFieldChange}
                                id="projectTime"
                                placeholder={this.state.projectTime} />
                        </div>
                        <button type="submit" onClick={this.constructNewProject}
                            className="btn btn-primary">Submit</button>


                    </form>
                </div>
            </React.Fragment>
        )
    }
}