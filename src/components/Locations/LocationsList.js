import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./location.css"
class LocationList extends Component {
    state = {
        locationName: "",
        date: "",
        details: "",
        isNeeded: false
    }

    render() {

        
        const complete = { isNeeded: true }

        return (<React.Fragment>
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
                                        <h5>{location.date}</h5>
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