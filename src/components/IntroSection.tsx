import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import bgImg from '../assets/image-intro-section.webp';
import birthControl from '../assets/birth-control.webp';
import contraception from '../assets/contraception.webp';
import sexualHealth from '../assets/sexual-health.webp';
import pms from '../assets/pms.webp';
import ProductInfoCard from './ProductInfoCard';

const productData = [
    {
        title: 'Birth Control',
        subTitle: 'Pick from 10 different brands, available in pills and patches.',
        image: birthControl
    },
    {
        title: 'Emergency Contraception',
        subTitle: 'Choose from 2 plan B pills that work up to 120 hours after unprotected sex',
        image: contraception
    },
    {
        title: 'Sexual Health',
        subTitle: 'Oral and topical solutions to prevent and treat Cold Sores and Herpes.',
        image: sexualHealth
    },
    {
        title: 'PMS',
        subTitle: 'From nausea, cramps, tenderness and aches we’ve got prescriptions to help',
        image: pms
    }
]

export default function IntroSection() {
    return (
        <div style={{ backgroundColor: '#F8F7F9' }}>
            <Container >
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className='text-center text-lg-start'>
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
                <Row xs={1} md={2} style={{ position: 'relative', bottom: 140 }} >
                    {productData.map((item, index) => (
                        <Col className='pb-3 px-3 rounded' lg>
                            <ProductInfoCard
                                title={item.title}
                                subTitle={item.subTitle}
                                productImage={item.image}
                            />
                        </Col>
                    ))}


                </Row>
            </Container>

        </div>
    )


}
