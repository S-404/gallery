import React from "react"
import {Card} from "react-bootstrap"
import {personalData} from "../../store/personalData/personalData"

const Person = () => {

    const data = personalData

    return (
        <div className='d-flex justify-content-center'>
            <Card className='col-8 border-0 text-center'>
                <Card.Body>
                    <Card.Img className='rounded-circle' src={data.imageUrl} alt='avatar'/>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.email}</Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Person