import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// the edit button will live on Event Detail

export default class NoteEditForm extends Component {

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
        const note = this.props.notes.find(a => a.id === parseInt(this.props.match.params.noteId))
        this.setState(note);
    }
    constructNewNote = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        let newNote = {
            note: this.state.note,
        }

        this.props.editNote(this.state.id, newNote)
            .then(() => {
                this.props.history.push("/notes")

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
                            <Link className="nav-link" to="/notes">Director's Notes</Link>
                        </li>
                    </ul>
                </nav>
                <h2>Note</h2>
                <form className="noteForm">
                    <div className="form-group">
                        <section className="noteField">
                            <label htmlFor="noteId"></label>
                            <label htmlFor="noteTo">Note To:</label>
                            <p></p>
                            <input type="text" required={true}
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="to"
                                placeholder={this.state.to}
                                size="35" />
                        </section>
                    </div>
                    <p></p>
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                        <section className="noteField">
                            <p></p>
                            <label htmlFor="note">Note:</label>
                            <p></p>
                            <textarea
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="note"
                                placeholder={this.state.note} rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructNewNote} className="btn btn-primary">Update</button>
                </form>
            </React.Fragment>
        )
    }
}