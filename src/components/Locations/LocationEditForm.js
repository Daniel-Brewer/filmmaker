import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// the edit button will live on Cast Member Detail

export default class LocationEditForm extends Component {

    state = {

    }
    // update state upon edits to fields
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // console.log(this.state)
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId, 0))
        this.setState(location);
    }
    constructNewLocation = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        let newLocation = {
            locationName: this.state.locationName,
            locationId: this.props.locations.find(e => e.name === this.state.location).id,
            details: this.state.details,
            id: this.state.id
        }
        this.props.editLocation(newLocation.id, newLocation)
            .then(() => {
                this.props.history.push(`/locations/${this.props.match.params.locationId}`)
            })
    }


    // in this form be sure to add existing STATE INFO in PLACEHOLDER>
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/locations">Locations</Link>
                        </li>
                    </ul>
                </nav>
                <form className="locationForm">
                    <div className="form-group">
                        <label htmlFor="locationName">Location Name</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="locationName"
                            placeholder={this.state.locationName} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="details"
                            placeholder={this.state.details} />
                    </div>
                    <button type="submit" onClick={this.constructNewLocation}
                        className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
        )
    }
}