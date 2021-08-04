import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import aboutImg from '../../../images/about.png';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container fluid>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left duration={2000} distance="40px">
                            <Image src={aboutImg} fluid />
                        </Fade>
                    </Col>
                    <Col md={4} className="p-md-5 mt-md-0 mt-4">
                        <Fade right duration={2000} distance="40px">
                            <p>About Our Company</p>
                            <h3>How We Can Help you</h3>
                            <p className="text-muted my-4 pr-md-5">Rent a car in Dhaka is one of the best car rental service providers in Bangladesh. We provide experienced and professional car hire services in Dhaka Bangladesh. You can always ready on our services because that is what we are best at. Once you have explored our options, you are certainly going to love it all. Time is here to plan for your luxurious, comfortable, and affordable Best rent a car in Bangladesh with Naiem Enterprise. We strive to get you the experience of your life.</p>
                            <Button
                                className="btn-main"
                                href="#pricing">
                                Learn More
                            </Button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;