import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [service, setservice] = useState([])

    useEffect(() => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setservice(data))
        
    }, [])
    return (
        <>
        <Row xs={1} md={3} className="g-4 service-design">
            {
                service.map(service => <Service
                    serviceSend = {service}
                ></Service>)
            }
        </Row>
        <Footer></Footer>
        </>
    );
};

export default Services;