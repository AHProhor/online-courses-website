import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './PopularCourse.css';

const PopularCourse = (props) => {
    const {img, coureseDuration, course,educationSystem,name,price,startingDate} = props.courseSend;
    return (
                                             
        <Col>
            <Card className="popular-course">
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

export default PopularCourse;