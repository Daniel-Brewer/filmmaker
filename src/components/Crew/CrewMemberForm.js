import React, { Component } from "react"
import "../login/Login.css"


export default class CrewMemberForm extends Component {
    // Set initial state
    state = {
        crewMemberName: "",
        job: "",
        details: "",
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
        if (this.state.job === "" || this.state.crewMemberName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const crewMember = {
                crewMemberName: this.state.crewMemberName,
                date: this.state.job,
                details: this.state.details,
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
            <form className="crewMemberForm border border-dark">
                <div className="form-group">
                    <label htmlFor="crewMemberName">Crew Member Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="crewMemberName"
                        placeholder="CrewMember name" />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="job"
                        placeholder="job" />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <button type="submit" onClick={this.constructNewCrewMember}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }