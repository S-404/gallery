import React from "react"
import {useSelector} from "react-redux"
import {useImages} from "../../hooks/useImages"
import ImageCategory from "./ImageCategory"

const Gallery = () => {

    const {images} = useSelector(state => state.images)

    //выгруженные 24 картинки бьются на категории по 6 шт.
    const galleryPerCategories = useImages(images, 6)

    if (!galleryPerCategories.length) return (<h3>Нет данных</h3>)

    return (
        <>
            {galleryPerCategories.map((imageCategory) => (
                <ImageCategory imageCategory={imageCategory}/>
            ))}
        </>
    )
}

export default Gallery