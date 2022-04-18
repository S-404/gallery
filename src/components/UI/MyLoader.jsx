import React from "react"
import {Spinner} from "react-bootstrap"

const MyLoader = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Spinner animation="border" variant='dark'/>
        </div>
    )
}

export default MyLoader