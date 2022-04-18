import React from "react"
import {useHistory} from "react-router-dom"
import {Button} from "react-bootstrap"
import "./imageThumbnail.css"

const ImageThumbnail = ({image}) => {
    const router = useHistory()

    const onClickButtonHandler = (id) => {
        router.push(`/image/${id}`)
    }
    return (
        <div className="image-thumbnail position-relative">
            <img
                className="image-thumbnail__image m-1"
                src={image?.thumbnailUrl}
                alt={`image_${image.id}`}
            />
            <div className="image-thumbnail__button d-flex justify-content-center w-100 p-3 position-absolute bottom-0 start-0">
                <Button onClick={() => onClickButtonHandler(image.id)}>
                    Подробнее
                </Button>
            </div>

        </div>

    )
}

export default ImageThumbnail