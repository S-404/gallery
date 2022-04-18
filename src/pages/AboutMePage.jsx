import React from "react"
import Person from "../components/person/Person"
import AboutMe from "../components/person/AboutMe"

const AboutMePage = () => {
    return (
        <div className="d-flex h-75 w-100 p-5 flex-md-row flex-column align-items-center justify-content-center">
            <Person/>
            <AboutMe/>
        </div>
    )
}

export default AboutMePage