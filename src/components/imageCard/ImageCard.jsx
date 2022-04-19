import React from "react"
import {Card} from "react-bootstrap"
import "../../styles/imageCard.css"

const ImageCard = ({image}) => {
    return (
        <Card
            className="image-card"
            border="secondary"
            body
            bg="light"
            text="dark"
        >
            <div className="image-card__image-block">
                <Card.Img
                    src={image?.url}
                    variant="top"
                    className="image-block__content"/>
            </div>
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