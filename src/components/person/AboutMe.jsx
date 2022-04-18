import React from "react"
import {Card} from "react-bootstrap"
import {personalData} from "../../store/personalData/personalData"

const AboutMe = () => {
    const data = personalData
    return (
        <div className="col-md-4 align-items-center">
            <Card>
                <Card.Header>
                    <Card.Title>Обо мне</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {data.about}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={data.cvUrl} target='_blank'>Моё Резюме</Card.Link>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default AboutMe