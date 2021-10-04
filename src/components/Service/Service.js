import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { img,coureseDuration, course,educationSystem,name,price,startingDate} = props.serviceSend;
    return (
        <Col>
            <Card className="services">
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h2>Instractor Name : {name}</h2>
                        <h2>Coursre : {course}</h2>
                        <h4>Course Duration : {coureseDuration}</h4>
                        <h4>Start : {startingDate}</h4>
                        <h4>System : {educationSystem}</h4>
                        <h2>Price : {price}</h2>
                    </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;