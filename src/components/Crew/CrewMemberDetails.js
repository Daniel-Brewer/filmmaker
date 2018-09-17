import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"




export default class CrewMemberDetail extends Component {
    render() {
        /*
            Using the route parameter, find the crewMember that the
            user clicked on by looking at the `this.props.crewMembers`
            collection that was passed down from ApplicationViews
        */
        const crewMember = this.props.crewMembers.find(t => t.id === parseInt(this.props.match.params.crewMemberId, 0)) || {}

        return (
            <div>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
       <ul className="nav nav-pills">
           <li className="nav-item">
               <Link className="nav-link" to="/projects">Projects</Link>
           </li>
           <li className="nav-item">
               <Link className="nav-link" to="/crewMembers">Crew</Link>
           </li>
           </ul>
           </nav>
            <section className="crewMember">
                <div key={crewMember.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={crewMembers_pic} className="icon--crewMember" /> */}
                            {crewMember.date}
                        </h4>
                        <h6 className="card-title">{crewMember.name}</h6>
                        <br></br>
                        <h6 className="card-title">{crewMember.phone}</h6>
                        <br></br>
                        <h6 className="card-title">{crewMember.email}</h6>
                        <br></br>
                        <button
                            onClick={() => this.props.deleteCrewMember(crewMember.id)
                                            .then(() => this.props.history.push("/crewMembers"))}
                            className="card-link ">Delete</button>
                            <button
                            onClick={() => this.props.history.push(`/crewMembers/edit/${crewMember.id}`)}
                            className="card-link">Edit</button>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}