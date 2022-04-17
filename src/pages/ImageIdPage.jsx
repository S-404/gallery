import React from "react"
import {Link, useParams} from "react-router-dom"

const ImageIdPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <Link to={'/'}>Back</Link>
            about image: id = {params.id}
        </div>
    )
}

export default ImageIdPage