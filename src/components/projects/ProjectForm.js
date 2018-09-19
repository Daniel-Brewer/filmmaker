import React, { Component } from "react"
import "../login/Login.css"


export default class ProjectForm extends Component {
    // Set initial state
    state = {
        projectName: "",     
        projectDate: "",
        projectTime: "",
        user: this.props.activeUser.id,
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
 
// make new project if not in db already
    constructNewProject = evt => {
        evt.preventDefault()
        if (this.state.projectName === "" || this.state.projectDate === ""|| this.state.projectTime === "") {
            window.alert("Please input all fields!")
        } else {
            const project = {
                projectName: this.state.projectName,
                projectDate: this.state.projectDate,
                projectTime: this.state.projectTime,
                user: this.props.activeUser.id,
                isChecked: false
            }

            // Create the project from DM function and redirect user to projects list
            this.props.addProject(project).then(() => this.props.history.push("/projects"))
        }
    }
    // add to and go to project list when submit button is clicked
    handleButtonClick = () => {
        // document.location.href = 'http://localhost:3000/projects'
        this.props.history("/projects")
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
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" required={true}
                        onChange={this.handleFieldChange}
                        id="projectDate"
                        placeholder="Add date" />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Call Time</label>
                    
                    <input type="time" required={true}
                        onChange={this.handleFieldChange}
                        id="projectTime"
                        placeholder="Time" />
                </div>
               
                <button type="submit" onClick={this.constructNewProject}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }