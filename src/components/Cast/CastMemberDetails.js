import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"




export default class CastMemberDetail extends Component {
    render() {
        /*
            Using the route parameter, find the castMember that the
            user clicked on by looking at the `this.props.castMembers`
            collection that was passed down from ApplicationViews
        */
        const castMember = this.props.castMembers.find(t => t.id === parseInt(this.props.match.params.castMemberId, 0)) || {}

        return (
            <div>
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
            <section className="castMember">
                <div key={castMember.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">{castMember.name}</h4>
                        <br></br>
                        {/* <h6>plays</h6> */}
                        <h5 className="card-title"> plays </h5>
                        <h5 className="card-title"> {castMember.characterName} </h5>
                        <br></br>
                        <h6 className="card-title">{castMember.phone}</h6>
                        <br></br>
                        <h6 className="card-title">{castMember.email}</h6>
                        <br></br>
                        <button
                            onClick={() => this.props.deleteCastMember(castMember.id)
                                .then(() => this.props.history.push("/castMembers"))}
                            className="card-link ">Delete</button>
                        <button
                            onClick={() => this.props.history.push(`/castMembers/edit/${castMember.id}`)}
                            className="card-link">Edit</button>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}