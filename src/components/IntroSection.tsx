import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import bgImg from '../assets/image-intro-section.webp';
import ProductInfoCard from './ProductInfoCard';

export default function IntroSection() {
    return (
        <div style={{ backgroundColor: '#F8F7F9' }}>
            <Container >
                <Row className='d-flex align-items-center'>
                    <Col lg={6}>
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
                    <Col lg={6}
                        style={{
                            backgroundImage: `url(${bgImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: '70vh',
                            maxHeight: '70vh',
                            minHeight: '20vh',
                        }}
                    >

                        {/* <Image src={bgImg} fluid /> */}
                    </Col>
                </Row>
                <Row style={{ position: 'relative', bottom: 160 }} >
                    <Col className='pb-3 ps-3 pe-3  rounded' lg>
                        <ProductInfoCard
                            title='Birth Control'
                            subTitle='Pick from 10 different brands, available in pills and patches..'
                        />
                    </Col>
                    <Col className='pb-3 ps-3 pe-3  rounded' lg>
                        <ProductInfoCard title='Emergency Contraception'
                            subTitle='Choose from 2 plan B pills that work up to 120 hours after unprotected sex'
                        />
                    </Col>
                    <Col className='pb-3 ps-3 pe-3  rounded' lg>
                        <ProductInfoCard title='Sexual Health'
                            subTitle='Oral and topical solutions to prevent and treat Cold Sores and Herpes.'
                        />
                    </Col>
                    <Col className='pb-3 ps-3 pe-3 rounded' lg>
                        <ProductInfoCard title='PMS'
                            subTitle='From nausea, cramps, tenderness and aches we’ve got prescriptions to help'
                        />
                    </Col>


                </Row>
            </Container>

        </div>
    )


}
