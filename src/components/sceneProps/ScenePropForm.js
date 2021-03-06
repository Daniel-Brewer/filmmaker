import React, { Component } from "react"
import "../login/Login.css"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default class ScenePropForm extends Component {
    // Set initial state
    state = {
        scenePropName: "",
        details: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewSceneProp = evt => {
        evt.preventDefault()
        if (this.state.scenePropName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const sceneProp = {
                scenePropName: this.state.scenePropName,
                details: this.state.details,
                user: this.props.activeUser.id,
                // project: this.props.currentProject.id,
                project: this.props.project,
                isChecked: false
            }

            // Create the animal and redirect user to animal list
            this.props.addSceneProp(sceneProp).then(() => this.props.history.push("/sceneProps"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/sceneProps'
    }
render() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
            <form className="scenePropForm border border-dark">
                <div className="form-group">
                    <label htmlFor="scenePropName">Scene Prop Name</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="scenePropName"
                        placeholder="SceneProp name" />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <button type="submit" onClick={this.constructNewSceneProp}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }