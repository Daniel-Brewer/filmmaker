import React, { Component } from "react"





export default class NoteDetails extends Component {
    render() {
        /*
            Using the route parameter, find the note that the
            user clicked on by looking at the `this.props.notes`
            collection that was passed down from ApplicationViews
        */
        const note = this.props.notes.find(t => t.id === parseInt(this.props.match.params.noteId, 0)) || {}

        return (
            <section className="note">
                <div key={note.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={notes_pic} className="icon--note" /> */}
                            {note.date}
                        </h4>
                        <h6 className="card-title">{note.note}</h6>
                        <br></br>
                        <h6 className="card-title">{note.details}</h6>
                        <br></br>
                        <button
                            onClick={() => this.props.deleteNote(note.id)
                                            .then(() => this.props.history.push("/notes"))}
                            className="card-link ">Delete</button>
                            <button
                            onClick={() => this.props.history.push(`/notes/edit/${note.id}`)}
                            className="card-link">Edit</button>
                    </div>
                </div>
            </section>
        )
    }
}