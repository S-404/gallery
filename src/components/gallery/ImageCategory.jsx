import React from "react"
import {Container} from "react-bootstrap"
import ImageThumbnail from "./imageThumbnail/ImageThumbnail"

const ImageCategory = ({imageCategory}) => {
    return (
        <Container className="bg-secondary bg-gradient rounded p-1 m-1" key={imageCategory.category}>
            <h5>Категория {imageCategory.category}</h5>
            <Container className="d-flex justify-content-center p-1 flex-wrap">
                <>
                    {imageCategory.images.map(image => (
                        <ImageThumbnail key={image.id} image={image}/>
                    ))}
                </>
            </Container>
        </Container>
    )
}

export default ImageCategory