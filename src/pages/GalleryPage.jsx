import React, {useEffect} from "react"
import {useActions} from "../hooks/useActions"
import {useSelector} from "react-redux"
import {Alert, Container} from "react-bootstrap"
import MyLoader from "../components/UI/MyLoader"
import Gallery from "../components/gallery/Gallery"


const GalleryPage = () => {
    // 1. «Галерея» (главная страница)
    //1.1. Должна содержать 4 категории,
    // где в каждой категории будут присутствовать 6 картинок
    // (итого нужно подгрузить с сервера только 24 первых картинки и разбить их по 4м категориям).

    const {fetchImages} = useActions()
    const {loading, error} = useSelector(state => state.images)

    useEffect(() => {
        //подгружается 24 первых картинки
        fetchImages(24)
    }, [])



    return (
        <Container>

            <h2>Галерея</h2>

            <Alert show={!!error} variant="danger">{error}</Alert>

            {loading ?
                <MyLoader/>
                :
                <Gallery/>
            }
        </Container>
    )
}

export default GalleryPage