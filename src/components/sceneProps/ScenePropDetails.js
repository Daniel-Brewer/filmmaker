import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"




export default class ScenePropDetail extends Component {
    render() {
        /*
            Using the route parameter, find the sceneProp that the
            user clicked on by looking at the `this.props.sceneProps`
            collection that was passed down from ApplicationViews
        */
        const sceneProp = this.props.sceneProps.find(t => t.id === parseInt(this.props.match.params.scenePropId, 0)) || {}

        return (
            <div>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sceneProps">Props</Link>
                        </li>
                    </ul>
                </nav>
                <section className="sceneProp">
                    <div key={sceneProp.id} className="detail-card">
                        <div className="card-body">
                            <h4 className="card-title">{sceneProp.scenePropName}</h4>
                            <br></br>
                            <h6 className="card-title">{sceneProp.details}</h6>
                            <br></br>
                            <button
                                onClick={() => this.props.deleteSceneProp(sceneProp.id)
                                    .then(() => this.props.history.push("/sceneProps"))}
                                className="card-link ">Delete</button>
                            <button
                                onClick={() => this.props.history.push(`/sceneProps/edit/${sceneProp.id}`)}
                                className="card-link">Edit</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}