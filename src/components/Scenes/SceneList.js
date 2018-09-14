import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./scene.css"
class SceneList extends Component {
    state = {
        sceneName: "",
        details: "",
        isNeeded: false
    }

    render() {

        
        const complete = { isNeeded: true }

        return (<React.Fragment>
             <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
            <form className="sceneListForm">
                <div className="sceneButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => 
                            this.props.history.push("/scenes/new")
                        
                        }>
                        Click to add your Scene
                </button>
                </div>
                <div className="checkbox">
                    <section className="scenes">
                        {
                            this.props.scenes.map(scene =>
                                <div key={scene.id} className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {scene.sceneName}
                                        </h4>
                                        <br></br>
                                        {/* <h4 className="card-title">
                                            {scene.characterName}
                                        </h4>
                                        <br></br> */}
                                        <h6>
                                            <br></br>
                                            {scene.detail}
                                            <br></br>

                                            <Link className="nav-link" to={`/scenes/${scene.id}`}>Details</Link>
                                            <button
                                                onClick={() => this.props.deleteScene(scene.id)}
                                                className="card-link btn btn-primary btn-sm">Delete Scene</button>

                                        </h6>
                                    </div>
                                    <label>
                                        <button
                                            onClick={() => this.props.editScene(scene.id, complete)
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

export default SceneList;