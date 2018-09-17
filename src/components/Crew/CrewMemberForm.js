import React, { Component } from "react"
import "../login/Login.css"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default class CrewMemberForm extends Component {
    // Set initial state
    state = {
        crewMemberName: "",
        job: "",
        details: "",
        user: this.props.activeUser.id,
        project: this.props.currentProject,
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewCrewMember = evt => {
        evt.preventDefault()
        if (this.state.job === "" || this.state.crewMemberName === "" || this.state.phone === ""|| this.state.email === "") {
            window.alert("Please input all fields!")
        } else {
            const crewMember = {
                crewMemberName: this.state.crewMemberName,
                job: this.state.job,
                phone: this.state.phone,
                email: this.state.email,
                user: this.props.activeUser.id,
                // project: this.props.currentProject.id,
                isChecked: false
            }

            // Create the Crew Member and redirect user to Crew Member list
            this.props.addCrewMember(crewMember).then(() => this.props.history.push("/crewMembers"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/crewMembers'
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
                <form className="crewMemberForm border border-dark">
                    <div className="form-group">
                        <label htmlFor="crewMemberName">Crew Member Name</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="crewMemberName"
                            placeholder="CrewMember name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job">Job</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="job"
                            placeholder="job" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" required={true}
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="Add phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" required={true}
                            onChange={this.handleFieldChange}
                            id="email"
                            placeholder="Add email" />
                    </div>
                    <button type="submit" onClick={this.constructNewCrewMember}
                        className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
        )
    }
}