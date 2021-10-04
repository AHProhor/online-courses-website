import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import StudentFeed from '../StudentFeed/StudentFeed';
import './StudentFeeds.css';

const StudentFeeds = () => {
    const [studentfeed, setStudentFeed] = useState([])

    useEffect(() => {
        fetch('./feedBack.JSON')
        .then(res => res.json())
        .then(data => setStudentFeed(data))
        
    }, [])
    return (
        <>
        <Row xs={1} md={3} className="g-4 studentFeed-design">
            {
                studentfeed.map(studentfeed => <StudentFeed
                        studentfeedSend = {studentfeed}
                ></StudentFeed>)
            }
        </Row>
        <Footer></Footer>
        </>
    );
};

export default StudentFeeds;