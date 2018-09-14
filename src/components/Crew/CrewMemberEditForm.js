import React, { Component } from "react"

// the edit button will live on Crew Member Detail

export default class CrewMemberEditForm extends Component {

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
    const crewMember = this.props.crewMembers.find(a => a.id === parseInt(this.props.match.params.crewMemberId, 0))
    this.setState(crewMember);
}
constructNewCrewMember = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newCrewMember = {
        crewMemberName: this.state.crewMemberName,
        crewMemberId: this.props.crewMembers.find(e => e.name === this.state.crewMember).id,
        job: this.state.job,
        details: this.state.details,
        id: this.state.id
    }
    this.props.editCrewMember(newCrewMember.id, newCrewMember)
    .then(()=>{
        this.props.history.push(`/crewMembers/${this.props.match.params.crewMemberId}`)
    })
}


// in this form be sure to add existing STATE INFO in PLACEHOLDER>
render() {
    return (
        <React.Fragment>
            <form className="crewMemberForm">
                <div className="form-group">
                    <label htmlFor="crewMemberName">Crew Member Name</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="crewtMemberName"
                        placeholder={this.state.crewMemberName} />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="job"
                        placeholder={this.state.job} />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder={this.state.details}/>
                </div>
                <button type="submit" onClick={this.constructNewCrewMember}
                className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
}