import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import PopularCourse from '../../PopolarCourse/PopularCourse';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    const [popularCourse, setCourse] = useState([])

    useEffect(() => {
        fetch('./popularServices.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    },[])
    // console.log(popularCourse);
    return (
        <>
        <Carousel className="font-resize">
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="https://www.kateunderwoodhr.co.uk/wp-content/uploads/2020/05/training-and-furlough-1.jpg"
                
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Welcome To Dream</h3>
                <p>Fullfill Your Dream With Us</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="https://www.arch2o.com/wp-content/uploads/2015/06/Arch2O-10-places-to-study-online-architecture-programs-get-architecture-courses-4.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Learn Your Self</h3>
                <p>Dream Team Always With You </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="https://mk0thinkificig8baqk3.kinstacdn.com/wp-content/uploads/2016/06/Create-Online-Courses-10.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3> Work Hard !!</h3>
                <p>Hard Work Can Give You Everything</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Row xs={1} md={2} className="g-4 design">
        {
                popularCourse.map(course => <PopularCourse courseSend = {course}> 
                </PopularCourse>)
            }
        </Row>
        <Footer></Footer>
        </>     
    );
};

export default Home;