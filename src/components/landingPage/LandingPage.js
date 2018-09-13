import React, { Component } from 'react'
import './landingPage.css'

export default class LandingPage extends Component {

    render() {
        let styles = {
            backgroundImage: "url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.indiaeducation.net%2Fimagesvr_ce%2F7720%2Ffilm%2520making.jpg&f=1) no-repeat center center fixed",
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
            backgroundSize: "cover"
        }
        return (
            <React.Fragment>
                <div className="projectList" style={styles}>
                    <div className="projectList">
                    
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/login")
                            }
                            }>Login</button>
                    </div>
<br></br>
<br></br>
                    <div className="registerButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/register")
                            }
                            }>Create Account</button>
                    </div>
<br></br>
<br></br>
                    <div className="projectButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/projects")
                            }
                            }>Go to Projects</button>
                    </div>
                </div>
                    
            </React.Fragment>
        )

    }

}