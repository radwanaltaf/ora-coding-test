import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import bgImg from '../assets/image-intro-section.webp';

export default function IntroSection() {
    return (
        <div style={{ backgroundColor: '#F8F7F9' }}>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col>
                        <h1 className='fw-bold' style={{ color: '#182B6B', fontFamily: "'Merriweather', 'serif'" }}>
                            Complete care for your reproductive health
                        </h1>
                        <h6 className='fw-light mt-3'>
                            We make it easy to get personalised prescriptions online, quickly, discreetly, affordably and direct to your door.
                        </h6>

                        <Button className='mt-3 px-4' style={{ backgroundColor: '#182B6B' }} variant="primary">
                            <span className='fw-bold'>Start evaluation</span>
                        </Button>{' '}
                    </Col>
                    <Col>
                        <Image src={bgImg} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )


}
