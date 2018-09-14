import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"




export default class SceneDetail extends Component {
    render() {
        /*
            Using the route parameter, find the scene that the
            user clicked on by looking at the `this.props.scenes`
            collection that was passed down from ApplicationViews
        */
        const scene = this.props.scenes.find(t => t.id === parseInt(this.props.match.params.sceneId, 0)) || {}

        return (
            <div>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/scenes">Scenes</Link>
                    </li>
                </ul>
            </nav>
            <section className="scene">
                <div key={scene.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">{scene.sceneName}</h4>
                        <br></br>
                        <h6 className="card-title">{scene.details}</h6>
                        <br></br>
                        <button
                            onClick={() => this.props.deleteScene(scene.id)
                                .then(() => this.props.history.push("/scenes"))}
                            className="card-link ">Delete</button>
                        <button
                            onClick={() => this.props.history.push(`/scenes/edit/${scene.id}`)}
                            className="card-link">Edit</button>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}