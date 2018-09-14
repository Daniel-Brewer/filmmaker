import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// the edit button will live on Cast Member Detail

export default class SceneEditForm extends Component {

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
        const scene = this.props.scenes.find(a => a.id === parseInt(this.props.match.params.sceneId, 0))
        this.setState(scene);
    }
    constructNewScene = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        let newScene = {
            sceneName: this.state.sceneName,
            sceneId: this.props.scenes.find(e => e.name === this.state.scene).id,
            details: this.state.details,
            id: this.state.id
        }
        this.props.editScene(newScene.id, newScene)
            .then(() => {
                this.props.history.push(`/scenes/${this.props.match.params.sceneId}`)
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
                            <Link className="nav-link" to="/scenes">Scenes</Link>
                        </li>
                    </ul>
                </nav>
                <form className="sceneForm">
                    <div className="form-group">
                        <label htmlFor="sceneName">Scene Name</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="sceneName"
                            placeholder={this.state.sceneName} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="details"
                            placeholder={this.state.details} />
                    </div>
                    <button type="submit" onClick={this.constructNewScene}
                        className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
        )
    }
}