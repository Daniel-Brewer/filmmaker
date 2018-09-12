import React, { Component } from 'react'
import './homePage.css'

export default class HomePage extends Component {

    render() {
        let styles = {
            backgroundImage: "url(https://pixabay.com/en/photography-art-lights-stand-2560956/) no-repeat center center fixed",
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