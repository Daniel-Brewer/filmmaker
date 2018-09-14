import React, { Component } from "react"
import "../login/Login.css"


export default class ProjectForm extends Component {
    // Set initial state
    state = {
        projectName: "",     
        details: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewProject = evt => {
        evt.preventDefault()
        if (this.state.projectName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const project = {
                projectName: this.state.projectName,
                details: this.state.details,
                user: this.props.activeUser.id,
                project: this.state.id,
                isChecked: false
            }

            // Create the animal and redirect user to animal list
            this.props.addProject(project).then(() => this.props.history.push("/projects"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/projects'
    }
render() {
    return (
        <React.Fragment>
            <form className="projectForm border border-dark">
                <div className="form-group">
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="projectName"
                        placeholder="Project name" />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="characterName">Character Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="characterName"
                        placeholder="Character name" />
                </div> */}
               
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <button type="submit" onClick={this.constructNewProject}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }