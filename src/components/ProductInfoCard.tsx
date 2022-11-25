import React from 'react'
import { Image } from 'react-bootstrap'
import bgImg from '../assets/birth-control.webp';



export default function ProductInfoCard({ title, subTitle, productImage }: any) {
    return (
        <div className='d-flex flex-row bg-white rounded pe-1'>
            <div className="pe-2">
                <Image src={productImage} className='rounded-start' fluid style={{ maxWidth: 80 }} />
            </div>
            <div className="py-2">
                <div style={{ color: 'darkblue' }} className='fw-bold'>{title}</div>
                <div style={{ fontSize: 13 }} className='fw-light'>{subTitle}</div>
            </div>

        </div>
    )
}
