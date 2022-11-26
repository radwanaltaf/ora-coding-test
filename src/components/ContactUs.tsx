import React from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap';
import bgImg from '../assets/contact-us.webp';


export default function ContactUs() {
    return (
        <div style={{ backgroundColor: '#F8F7F9' }}>
            <Container className='mt-4' >
                <Row className='d-flex align-items-center'>
                    <Col lg={6}
                        style={{
                            backgroundImage: `url(${bgImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: '50vh',
                            maxHeight: '50vh',
                            minHeight: '20vh',
                        }}
                    >

                    </Col>
                    <Col lg={6} className='text-center text-lg-start'>
                        <h1 className='fw-bold' style={{ color: '#182B6B', fontFamily: "'Merriweather', 'serif'" }}>
                            Talk to us
                        </h1>
                        <h6 className='fw-light mt-3'>
                            Want to speak to a Doctor about your options? Unsure where to start? We're here to help. Arrange a video call to speak to one of our Doctors today.
                        </h6>

                        <Button className='mt-3 px-5' style={{ borderRadius: '20px', backgroundColor: '#182B6B' }} variant="primary">
                            <span style={{ fontFamily: 'sans-serif' }} className='fw-bold'>Talk to us</span>
                        </Button>{' '}
                    </Col>

                </Row>
            </Container>

        </div>
    )
}
