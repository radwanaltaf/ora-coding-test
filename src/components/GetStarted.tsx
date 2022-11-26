import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import pick from '../assets/pick.webp';
import prescribe from '../assets/Prescribe.webp';
import receive from '../assets/receive.webp';


export default function GetStarted() {
    return (
        <Container className='mt-5'>
            <h1 style={{ color: '#182B6B' }} className='text-center fw-bold mb-5 '>3 Steps to get your treatment today
            </h1>
            <Row>

                <Col className='pe-5 pb-3'>
                    <div className='d-flex flex-row align-items-center justify-content-around'>
                        <Image className='p-2' src={pick} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                        <div className='d-flex flex-column'>
                            <span className=' fw-bold h4' style={{ color: '#182B6B' }}>1. Pick</span>
                            <span className=''>Answer a few questions in 30 seconds & pick the medication you need.</span>
                        </div>
                    </div>
                </Col>



                <Col className='pe-5 pb-3'>
                    <div className='d-flex flex-row align-items-center'>
                        <Image className='p-2' src={prescribe} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                        <div className='d-flex flex-column'>
                            <span className=' fw-bold h4' style={{ color: '#182B6B' }}>2. Prescribe</span>
                            <span className=''>Speak to a Doctor online who will write your prescription in 5 minutes.</span>
                        </div>
                    </div>
                </Col>


                <Col className='pe-5 pb-3'>
                    <div className='d-flex flex-row align-items-center'>
                        <Image className='p-2' src={receive} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                        <div className='d-flex flex-column'>
                            <span className=' fw-bold h4' style={{ color: '#182B6B' }}>3. Receive</span>
                            <span className=''>Get your prescription discreetly within 4 hours.</span>
                        </div>
                    </div>
                </Col>



            </Row>
        </Container>
    )
}
