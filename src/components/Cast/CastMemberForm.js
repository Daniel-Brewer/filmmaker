import React, { Component } from "react"
import "../login/Login.css"


export default class CastMemberForm extends Component {
    // Set initial state
    state = {
        castMemberName: "",
        characterName: "",
        details: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewCastMember = evt => {
        evt.preventDefault()
        if (this.state.characterName === "" || this.state.castMemberName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const castMember = {
                castMemberName: this.state.castMemberName,
                characterName: this.state.characterName,
                details: this.state.details,
                user: this.props.activeUser.id,
                // project: this.props.project.id,
                isChecked: false
            }

            // Create the animal and redirect user to animal list
            this.props.addCastMember(castMember).then(() => this.props.history.push("/castMembers"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/castMembers'
    }
render() {
    return (
        <React.Fragment>
            <form className="castMemberForm border border-dark">
                <div className="form-group">
                    <label htmlFor="castMemberName">Cast Member Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="castMemberName"
                        placeholder="CastMember name" />
                </div>
                <div className="form-group">
                    <label htmlFor="characterName">Character Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="characterName"
                        placeholder="Character name" />
                </div>
               
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <button type="submit" onClick={this.constructNewCastMember}
                    className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
    }
