import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import bgImgDr from '../assets/doctor.webp';


export default function ReviewSlide() {
    return (
        <div>
            <div style={{ backgroundColor: '#F8F7F9' }}>
                <Container className='mt-5'>
                    <Row className='d-flex align-items-center'>
                        <Col lg={6} className='text-center text-lg-start'>
                            <h1 className='fw-bold' style={{ color: '#182B6B', fontFamily: "'Merriweather', 'serif'" }}>
                                The Doctor went the extra mile to explain all my options and the process was easy.
                            </h1>



                        </Col>
                        <Col lg={6}
                            style={{
                                backgroundImage: `url(${bgImgDr})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: '48vh',
                                maxHeight: '48vh',
                                minHeight: '20vh',
                            }}
                        >

                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}
