import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./sceneProp.css"
class ScenePropList extends Component {
    state = {
        scenePropName: "",
        details: "",
        isNeeded: false
    }

    render() {

        
        const complete = { isNeeded: true }

        return (<React.Fragment>
            <form className="scenePropListForm">
                <div className="scenePropButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => 
                            this.props.history.push("/sceneProps/new")
                        
                        }>
                        Click to add your Scene Prop
                </button>
                </div>
                <div className="checkbox">
                    <section className="sceneProps">
                        {
                            this.props.sceneProps.map(sceneProp =>
                                <div key={sceneProp.id} className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {sceneProp.scenePropName}
                                        </h4>
                                        <br></br>
                                        <h4 className="card-title">
                                            {sceneProp.characterName}
                                        </h4>
                                        <br></br>
                                        <h6>
                                            <br></br>
                                            {sceneProp.detail}
                                            <br></br>

                                            <Link className="nav-link" to={`/sceneProps/${sceneProp.id}`}>Details</Link>
                                            <button
                                                onClick={() => this.props.deleteSceneProp(sceneProp.id)}
                                                className="card-link btn btn-primary btn-sm">Delete Scene Prop</button>

                                        </h6>
                                    </div>
                                    <label>
                                        <button
                                            onClick={() => this.props.editSceneProp(sceneProp.id, complete)
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

export default ScenePropList;