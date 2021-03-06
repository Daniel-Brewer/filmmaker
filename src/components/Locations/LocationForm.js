import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../login/Login.css"


export default class LocationForm extends Component {
    // Set initial state
    state = {
        locationName: "",
        details: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.locationName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const location = {
                locationName: this.state.locationName,
                details: this.state.details,
                user: this.props.activeUser.id,
                isChecked: false
            }

            // Create the animal and redirect user to animal list
            this.props.addLocation(location).then(() => this.props.history.push("/locations"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/locations'
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
            <form className="locationForm border border-dark">
                <div className="form-group">
                    <label htmlFor="locationName">Location Name</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="locationName"
                        placeholder="Location name" />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <button type="submit" onClick={this.constructNewLocation}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }