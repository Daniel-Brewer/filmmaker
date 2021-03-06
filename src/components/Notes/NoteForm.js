import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
export default class NoteForm extends Component {


    //set initial state here


    state = {
        noteId: "",
        note: "",
        date: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewNote = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        const notes = {
            id: this.state.noteId,
            note: this.state.note,
            date: new Date().toISOString(),
            userId: credentials.id,
            // user: this.props.activeUser.id
        }

        this.props.addNote(notes)
            .then(() => this.props.history.push("/notes"))
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
                <h2>note</h2>
                <form className="noteForm">
                    <div className="form-group">
                        <section className="noteField">
                            <label htmlFor="noteId"></label>
                            <label htmlFor="noteTo">Note To:</label>
                            <p></p>
                            <input type="text" required={true}
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="noteTo"
                                placeholder="Note To"
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
                                placeholder="..." rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructNewNote} className="btn btn-primary">Add Note</button>
                </form>
            </React.Fragment>
        )
    }
}