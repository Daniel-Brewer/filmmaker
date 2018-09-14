import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the loaction that the
            user clicked on by looking at the `this.props.loactions`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(t => t.id === parseInt(this.props.match.params.locationId, 0)) || {}

        return (
            <div>
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
            <section className="location">
                <div key={location.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">{location.locationName}</h4>
                        <br></br>
                        <h6 className="card-title">{location.details}</h6>
                        <br></br>
                        <button
                            onClick={() => this.props.deleteLocation(location.id)
                                .then(() => this.props.history.push("/locations"))}
                            className="card-link ">Delete</button>
                        <button
                            onClick={() => this.props.history.push(`/locations/edit/${location.id}`)}
                            className="card-link">Edit</button>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}