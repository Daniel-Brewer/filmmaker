import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./crew.css"
class CrewMemberList extends Component {
    state = {
        crewMemberName: "",
        date: "",
        details: "",
        isNeeded: false
    }

    render() {


        const complete = { isNeeded: true }

        return (<React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
            <form className="crewMemberListForm">
                <div className="crewMemberButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() =>
                            this.props.history.push("/crewMembers/new")

                        }>
                        Add Crew Member
                </button>
                </div>
                <div className="checkbox">
                    <section className="crewMembers">
                        {
                            this.props.crewMembers.map(crewMember =>
                                <div key={crewMember.id} className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {crewMember.crewMemberName}
                                        </h4>
                                        <br></br>
                                        <h5 className="card-title">
                                            {crewMember.job}
                                        </h5>
                                        <br></br>

                                        <h6>Phone</h6>
                                        {crewMember.phone}
                                        <br></br>
                                        <h6>Email</h6>
                                        {crewMember.email}
                                        <br></br>

                                        {/* <Link className="nav-link" to={`/crewMembers/${crewMember.id}`}>Details</Link> */}
                                        <button
                                            onClick={() => this.props.deleteCrewMember(crewMember.id)}
                                            className="card-link btn btn-primary btn-sm">Delete Crew Member</button>
                                        <br></br>
                                        <br></br>
                                        <button
                                            onClick={() => this.props.history.push(`/crewMembers/edit/${crewMember.id}`)}
                                            className="card-link">Edit</button>

                                    </div>
                                    <label>
                                        {/* <button
                                            onClick={() => this.props.editCrewMember(crewMember.id, complete)
                                            }
                                            className="card-link btn btn-secondary btn-lg btn-block">Needed
                                         </button> */}
                                    </label>
                                </div>
                            )
                        }
                    </section>
                </div>
            </form>
        </React.Fragment>
        )
    }
}

export default CrewMemberList;