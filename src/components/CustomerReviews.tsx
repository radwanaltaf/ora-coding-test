import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const reviewData = [
    {
        name: 'Lim Xin Tan',
        review: `‘The buying process was fuss free and easy. Delivery was super quick and the customer service is good.’`,
    },
    {
        name: 'Fanny S',
        review: `
        ‘The website is simple and easy to navigate. I appreciate the fast response and convenience, not to mention it’s affordable as well.’`,
    },
    {
        name: 'Margaret L',
        review: `The Doctor went the extra mile to explain all my options for birth control.’`,
    }
]

export default function CustomerReviews() {
    return (
        <Container className='mt-5'>
            <h1 style={{ color: '#182B6B' }} className='text-center fw-bold mb-4 '>What our patients are saying</h1>
            <Row>
                {reviewData.map((item, index) => (
                    <Col>
                        <div className='d-flex flex-column align-items-center'>
                            <span className='p-2'>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span style={{ color: '#182B6B' }} className="material-symbols-outlined">
                                        star
                                    </span>
                                ))}
                            </span>
                            <span className=' fw-bold h4' style={{ color: '#182B6B' }}>{item.name}</span>
                            <span className='p-2'>{item.review}</span>
                        </div>
                    </Col>
                ))}


            </Row>
        </Container>
    )
}
