import React, { Component } from "react"

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
        details: this.state.details,
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
            <form className="castMemberForm">
                <div className="form-group">
                    <label htmlFor="castMemberName">Cast Member Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="castMemberName"
                        placeholder={this.state.castMemberName} />
                </div>
                <div className="form-group">
                    <label htmlFor="characterName">Character Name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="characterName"
                        placeholder={this.state.characterName} />
                </div>

                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder={this.state.details}/>
                </div>
                <button type="submit" onClick={this.constructNewCastMember}
                className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
}