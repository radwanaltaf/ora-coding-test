import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import bgImg from '../assets/birth-control.webp';



export default function ProductInfoCard({ title, subTitle }: any) {
    return (
        <div className='d-flex flex-row bg-white rounded pe-1'>
            <div className="pe-2">
                <Image src={bgImg} className='rounded-start' fluid style={{ maxWidth: 80 }} />
            </div>
            <div className="py-2">
                <div className='fw-bold'>{title}</div>
                <div style={{ fontSize: 13 }} className='fw-lighter'>{subTitle}</div>
            </div>

        </div>
    )
}
