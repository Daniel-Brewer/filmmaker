import React, { Component } from "react"
import Header from "./Header"
import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"

class Filmmaker extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <NavBar /> */}
                <Header />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Filmmaker
