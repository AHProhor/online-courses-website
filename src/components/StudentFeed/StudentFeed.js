import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './StudentFeed.css';

const StudentFeed = (props) => {
    const { img,course,name, feedBack, work} = props.studentfeedSend;
    return (
        <Col>
            <Card className="studentFeed">
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h2>Instractor Name : {name}</h2>
                        <h2>Coursre : {course}</h2>
                        <h2>Working At: {work}</h2>
                        <h5>FeedBack : {feedBack} </h5>
                    </Card.Body>
            </Card>
        </Col>
    );
};

export default StudentFeed;