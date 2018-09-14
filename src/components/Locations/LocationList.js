import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./location.css"
class LocationList extends Component {
    state = {
        locationName: "",
        details: "",
        isNeeded: false
    }

    render() {


        const complete = { isNeeded: true }

        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
                <form className="locationListForm">
                    <div className="locationButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() =>
                                this.props.history.push("/locations/new")

                            }>
                            Click to add your Location
                </button>
                    </div>
                    <div className="checkbox">
                        <section className="locations">
                            {
                                this.props.locations.map(location =>
                                    <div key={location.id} className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                {location.locationName}
                                            </h4>
                                            <br></br>
                                            <h6>
                                                <br></br>
                                                {location.detail}
                                                <br></br>

                                                <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                                                <button
                                                    onClick={() => this.props.deleteLocation(location.id)}
                                                    className="card-link btn btn-primary btn-sm">Delete Location</button>

                                            </h6>
                                        </div>
                                        <label>
                                            <button
                                                onClick={() => this.props.editLocation(location.id, complete)
                                                }
                                                className="card-link btn btn-secondary btn-lg btn-block">Needed
                                         </button>

                                            {/* {id} */}
                                        </label>
                                    </div>
                                )
                            }
                        </section>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default LocationList;