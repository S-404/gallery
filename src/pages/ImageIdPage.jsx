import React, {useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {useActions} from "../hooks/useActions"
import {useSelector} from "react-redux"
import {Alert, Button, Container} from "react-bootstrap"
import ImageCard from "../components/imageCard/ImageCard"
import MyLoader from "../components/UI/MyLoader"
import {homeRoute} from "../router/routes"

const ImageIdPage = () => {

    const params = useParams()
    const {fetchOneImage} = useActions()
    const {image, loading, error} = useSelector(state => state.image)

    useEffect(() => {
        fetchOneImage(params.id)
    }, [])

    return (
        <Container className="col-md-4 col-sm-12 mt-4">


            <Button as={Link} to={homeRoute.path} variant="outline-primary">Назад</Button>

            <h2>Подробности о картинке</h2>

            <Alert show={!!error} variant="danger">{error}</Alert>

            {loading ?
                <MyLoader/>
                :
                <ImageCard image={image}/>
            }

        </Container>
    )
}

export default ImageIdPage