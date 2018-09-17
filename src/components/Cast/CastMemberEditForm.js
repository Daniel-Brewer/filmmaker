import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// the edit button will live on Cast Member Detail

export default class CastMemberEditForm extends Component {

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
    const castMember = this.props.castMembers.find(a => a.id === parseInt(this.props.match.params.castMemberId, 0))
    this.setState(castMember);
}
constructNewCastMember = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newCastMember = {
        castMemberName: this.state.castMemberName,
        castMemberId: this.props.castMembers.find(e => e.name === this.state.castMember).id,
        characterName: this.state.characterName,
        phone: this.state.phone,
        email: this.state.email,
        // project: this.props.projects.find(e => e.projectId === this.state.project).id,

        id: this.state.id
    }
    this.props.editCastMember(newCastMember.id, newCastMember)
    .then(()=>{
        this.props.history.push(`/castMembers/${this.props.match.params.castMemberId}`)
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
                    <Link className="nav-link" to="/castMembers">Cast</Link>
                </li>
                </ul>
                </nav>
            <form className="castMemberForm">
                <div className="form-group">
                    <label htmlFor="castMemberName">Cast Member Name</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="castMemberName"
                        placeholder={this.state.castMemberName} />
                </div>
                <div className="form-group">
                    <label htmlFor="characterName">Character Name</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="characterName"
                        placeholder={this.state.characterName} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="phone"
                        placeholder={this.state.phone}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" required={true}
                        onChange={this.handleFieldChange}
                        id="email"
                        placeholder={this.state.email}/>
                </div>
                <button type="submit" onClick={this.constructNewCastMember}
                className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
}