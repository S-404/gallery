import React from "react"
import {Card} from "react-bootstrap"

const ImageCard = ({image}) => {
    return (
        <Card border="secondary" body bg="light" text="dark">
            <Card.Img variant="top" src={image?.url}/>
            <Card.Body>
                <Card.Title>{image?.title}</Card.Title>
                <Card.Text>id: {image?.id}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={image?.url} target='_blank'>Image Link</Card.Link>
            </Card.Footer>
        </Card>
    )
}

export default ImageCard