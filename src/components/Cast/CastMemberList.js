import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./cast.css"
class CastMemberList extends Component {
    state = {
        castMemberName: "",
        characterName: "",
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
            <form className="castMemberListForm">
                <div className="castMemberButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() =>
                            this.props.history.push("/castMembers/new")

                        }>
                        Click to add your Cast Member
                </button>
                </div>
                <div className="checkbox">
                    <section className="castMembers">
                        {
                            this.props.castMembers.map(castMember =>
                                <div key={castMember.id} className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {castMember.castMemberName}
                                        </h4>
                                        <br></br>
                                        <h5 className="card-title">plays</h5>
                                        <br></br>
                                        <h4 className="card-title">
                                            {castMember.characterName}
                                        </h4>
                                        <br></br>
                                        <h6>
                                            <br></br>
                                            {castMember.detail}
                                            <br></br>
                                            <Link className="nav-link" to={`/castMembers/${castMember.id}`}>Details</Link>
                                            <button
                                                onClick={() => this.props.deleteCastMember(castMember.id)}
                                                className="card-link btn btn-primary btn-sm">Delete Cast Member</button>
                                            <br></br>
                                            <br></br>
                                            <button
                                                onClick={() => this.props.history.push(`/castMembers/edit/${castMember.id}`)}
                                                className="card-link">Edit</button>
                                        </h6>
                                    </div>
                                    <label>
                                        <button
                                            onClick={() => this.props.editCastMember(castMember.id, complete)
                                            }
                                            className="card-link btn btn-secondary btn-lg btn-block">Needed
                                         </button>

                                        {/* {id} */}
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

export default CastMemberList;