import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// the edit button will live on Cast Member Detail

export default class ScenePropEditForm extends Component {

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
        const sceneProp = this.props.sceneProps.find(a => a.id === parseInt(this.props.match.params.scenePropId, 0))
        this.setState(sceneProp);
    }
    constructNewSceneProp = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        let newSceneProp = {
            scenePropName: this.state.scenePropName,
            scenePropId: this.props.sceneProps.find(e => e.name === this.state.sceneProp).id,
            details: this.state.details,
            id: this.state.id
        }
        this.props.editSceneProp(newSceneProp.id, newSceneProp)
            .then(() => {
                this.props.history.push(`/sceneProps/${this.props.match.params.scenePropId}`)
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
                            <Link className="nav-link" to="/sceneProps">Props</Link>
                        </li>
                    </ul>
                </nav>
                <form className="scenePropForm">
                    <div className="form-group">
                        <label htmlFor="scenePropName">Scene Prop Name</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="scenePropName"
                            placeholder={this.state.scenePropName} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="details"
                            placeholder={this.state.details} />
                    </div>
                    <button type="submit" onClick={this.constructNewSceneProp}
                        className="btn btn-primary">Submit</button>


                </form>
            </React.Fragment>
        )
    }
}