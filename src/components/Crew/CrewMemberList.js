import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./crewMember.css"
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
            <form className="crewMemberListForm">
                <div className="crewMemberButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => 
                            this.props.history.push("/crewMembers/new")
                        
                        }>
                        Click to add your Crew Member
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
                                        <h5>{crewMember.date}</h5>
                                        <br></br>
                                        <h6>
                                            <br></br>
                                            {crewMember.detail}
                                            <br></br>

                                            <Link className="nav-link" to={`/crewMembers/${crewMember.id}`}>Details</Link>
                                            <button
                                                onClick={() => this.props.deleteCrewMember(crewMember.id)}
                                                className="card-link btn btn-primary btn-sm">Delete Crew Member</button>

                                        </h6>
                                    </div>
                                    <label>
                                        <button
                                            onClick={() => this.props.editCrewMember(crewMember.id, complete)
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

export default CrewMemberList;