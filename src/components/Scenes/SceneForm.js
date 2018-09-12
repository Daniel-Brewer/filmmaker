import React, { Component } from "react"
import "../login/Login.css"


export default class SceneForm extends Component {
    // Set initial state
    state = {
        sceneName: "",
        details: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewScene = evt => {
        evt.preventDefault()
        if (this.state.sceneName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const scene = {
                sceneName: this.state.sceneName,
                details: this.state.details,
                user: this.props.activeUser.id,
                isChecked: false
            }

            // Create the animal and redirect user to animal list
            this.props.addScene(scene).then(() => this.props.history.push("/scenes"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/scenes'
    }
render() {
    return (
        <React.Fragment>
            <form className="sceneForm border border-dark">
                <div className="form-group">
                    <label htmlFor="sceneName">Scene Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="sceneName"
                        placeholder="Scene name" />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <button type="submit" onClick={this.constructNewScene}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }