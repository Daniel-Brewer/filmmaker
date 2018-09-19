import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './note.css'
class NoteList extends Component {
    findUserName = notes => {
        return this.props.users.find(user => user.id === notes.userId).username
    }

    render() {

        // const credentials = JSON.parse(localStorage.getItem('credentials'))




        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
                <div className="notesButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/notes/new")
                        }
                        }>
                        Create new note
                    </button>
                </div>

                <section>
                    <div>
                        <h2 className="formHeader">Director's Notes</h2>
                        <section className="notes">
                            {
                                this.props.notes.map(notes =>
                                    <div id={`note--${notes.id}`} key={notes.id} className="noteCard">
                                        <div id="noteCard-body">
                                            <h6 className="noteCard-title">
                                                <section className="formCard">
                                                    <h5> From: {this.findUserName(notes)}</h5>
                                                    <h6> to: {notes.to}</h6>
                                                    <h6>{notes.noteEntry}</h6>
                                                    <p>{notes.date}</p>
                                                    <button
                                                        onClick={() => this.props.deleteNote(notes.id)
                                                            .then(() => this.props.history.push("/notes"))}
                                                        className="nav-link-delete"><hover>Delete</hover></button>
                                                    <button
                                                        onClick={() => this.props.history.push(`/notes/edit/${notes.id}`)}
                                                        className="card-link-edit"><span>Edit</span></button>



                                                </section>

                                            </h6>
                                        </div>
                                    </div>





                                )}
                        </section>
                    </div>

                </section>

            </React.Fragment>
        )
    }
}

export default NoteList