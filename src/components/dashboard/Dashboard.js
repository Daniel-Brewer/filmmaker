import React, { Component } from 'react'
import './dashboard.css'

export default class HomePage extends Component {

    render() {
        let styles = {
            backgroundImage: "url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indiawilds.com%2Fimages%2FSabyasachi_about.jpg&f=1) no-repeat center center fixed",
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
            backgroundSize: "cover"
        }
        return (
            <React.Fragment>
                <div className="homeButtons" style={styles}>
                    <div className="loginButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/login")
                            }
                            }>Login</button>
                    </div>
                    <br></br>
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
                </div>
                    
            </React.Fragment>
        )

    }

}