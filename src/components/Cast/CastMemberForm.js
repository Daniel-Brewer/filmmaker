import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../login/Login.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default class CastMemberForm extends Component {
    // Set initial state
    state = {
        castMemberName: "",
        characterName: "",
        phone: "",
        email: "",
        projects:[],
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
// make a new Cast Member if not in db already
    constructNewCastMember = evt => {
        evt.preventDefault()
        if (this.state.characterName === "" || this.state.castMemberName === "" || this.state.phone === ""|| this.state.email === "") {
            window.alert("Please input all fields!")
        } else {
            // defining what is in the Cast Member object
            const castMember = {
                castMemberName: this.state.castMemberName,
                characterName: this.state.characterName,
                phone: this.state.phone,
                email: this.state.email,
                projects: this.props.projects.id,
                user: this.props.activeUser.id,
                isChecked: false

            }
            // Create the cast member and redirect user to cast member list
            this.props.addCastMember(castMember).then(() => this.props.history.push("/castMembers"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/castMembers'
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
                <form className="castMemberForm border border-dark">
                    <div className="form-group">
                        <label htmlFor="castMemberName">Cast Member Name</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="castMemberName"
                            placeholder="CastMember name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="characterName">Character Name</label>
                        <input type="text" required={true}
                            onChange={this.handleFieldChange}
                            id="characterName"
                            placeholder="Character name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" required={true}
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="Add phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" required={true}
                            onChange={this.handleFieldChange}
                            id="email"
                            placeholder="Add email" />
                    </div>
                    <button type="submit" onClick={this.constructNewCastMember}
                        className="btn btn-primary">Submit</button>



                </form>
            </React.Fragment>
        )
    }
}
