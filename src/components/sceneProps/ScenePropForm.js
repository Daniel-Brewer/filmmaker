import React, { Component } from "react"
import "../login/Login.css"


export default class ScenePropForm extends Component {
    // Set initial state
    state = {
        scenePropName: "",
        details: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewSceneProp = evt => {
        evt.preventDefault()
        if (this.state.scenePropName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const sceneProp = {
                scenePropName: this.state.scenePropName,
                details: this.state.details,
                isChecked: false
            }

            // Create the animal and redirect user to animal list
            this.props.addSceneProp(sceneProp).then(() => this.props.history.push("/sceneProps"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/sceneProps'
    }
render() {
    return (
        <React.Fragment>
            <form className="scenePropForm border border-dark">
                <div className="form-group">
                    <label htmlFor="scenePropName">Scene Prop Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="scenePropName"
                        placeholder="SceneProp name" />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <button type="submit" onClick={this.constructNewSceneProp}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }