import React from "react"
import {Card} from "react-bootstrap"

const ImageCard = ({image}) => {
    return (
        <Card border="secondary" body bg="light" text="dark">
            <Card.Img variant="top" src={image?.url}/>
            <Card.Body>
                <Card.Title>{image?.title}</Card.Title>
                <Card.Text>id: {image?.id}</Card.Text>
                <Card.Link href={image?.url}>Image Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ImageCard