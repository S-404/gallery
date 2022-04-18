import React from "react"
import {Card} from "react-bootstrap"
import {useSelector} from "react-redux"

const ImageCard = () => {
    const {image} = useSelector(state => state.image)
    return (
        <Card border="secondary" body bg="light" text="dark">
            <Card.Title>{image?.title}</Card.Title>
            <Card.Img src={image?.url}/>
        </Card>
    )
}

export default ImageCard