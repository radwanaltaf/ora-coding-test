import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import birthControlFull from '../assets/birth-control-full.webp';
import contraceptionFull from '../assets/contraception-full.webp';
import periodFull from '../assets/period-full.webp';
import HerpesFull from '../assets/herpes-full.webp';
import yeastFull from '../assets/yeast-full.webp';
import pmsFull from '../assets/pms-full.webp';
import acneFull from '../assets/acne-full.webp';


const productGridData = [
    {
        title: 'Birth Control',
        subtitle: 'Whether you’re new to birth control or want to speak to a doctor about your options we’re here for you.',
        prodImage: birthControlFull,
        price: 18,
    },
    {
        title: 'Emergency Contraception',
        subtitle: 'If you had unprotected sex or your primary birth control method didn’t work, the morning after pill can prevent unwanted pregnancy.',
        prodImage: contraceptionFull,
        price: 18,
    },
    {
        title: 'Period Delay',
        subtitle: 'Want be period-free for an important event or holiday? We have period delay tablets to help you take control over your period.',
        prodImage: periodFull,
        price: 18,
    },
    {
        title: 'Herpes & Cold Sores',
        subtitle: 'Treat by preventing the spread to give your body more time to fight the infection with anti-viral treatments.',
        prodImage: HerpesFull,
        price: 18,
    },
    {
        title: 'Yeast Infections',
        subtitle: 'Treat Thrush symptoms like itching, irritation, redness and soreness with anti-fungal medication.',
        prodImage: yeastFull,
        price: 18,
    },
    {
        title: 'PMS',
        subtitle: 'Struggling with PMS? We have medication to treat cramps, nausea, aches, breast tenderness and others.',
        prodImage: pmsFull,
        price: 18,
    },
    {
        title: 'Acne & Rosacea',
        subtitle: 'These hormonal skin concerns can be treated with topical and oral medication for clearer, healthy skin.',
        prodImage: acneFull,
        price: 18,
    },
]

export default function ProductsGrid() {
    return (
        <Container className='mt-4'>
            <h2 style={{ color: 'darkblue' }} className='d-flex justify-content-center fw-bold' >For all things reproductive health</h2>
            <span className='d-flex justify-content-center' >Our doctors are well versed in contraception, STIs, PMS and hormonal skincare.</span>
            {/* Array.from({ length: 4 }).map((_, idx) */}
            <Row xs={1} md={3} className="g-4 mt-1">
                {productGridData.map((item) => (
                    <Col>
                        <Card style={{ borderRadius: '20px' }} className='text-center h-100' bg='light' border='0'>
                            <Card.Img style={{ width: '170px', height: '170px', objectFit: 'contain' }} className='mx-auto container' variant="top" src={item.prodImage} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.subtitle}
                                </Card.Text>


                            </Card.Body>
                            <div className='d-flex align-content-end justify-content-evenly  p-4'>
                                <Button variant='primary' style={{ backgroundColor: '#182B6B', border: '0px', borderRadius: '20px', fontSize: '14px' }} className='px-4'> Buy now from ${item.price}</Button>

                                <Button variant='light' style={{ border: '1px solid #182B6B', borderRadius: '20px', fontSize: '14px' }} className='px-5'> Learn More</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}
