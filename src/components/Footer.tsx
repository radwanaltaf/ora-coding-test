import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: '#182B6B', }}>
            <section className="d-flex justify-content-center justify-content-lg-between px-4 border-bottom">
            </section>

            <section className="text-white">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem"></i>OVA
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Learn
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Blog</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Instagram</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">FAQ</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Services
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Birth Control</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Emergency Contraception</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Sexual Health</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Skincare</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home "></i>Singapore</p>
                            <p>
                                <i className="fas fa-envelope"></i>
                                hello@getova.com.sg
                            </p>
                            <p><i className="fas fa-print "></i>+65 69515393
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center fw-bold text-white p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © Ova {new Date().getFullYear().toString()}. All Rights Reserved.
            </div>
        </footer>
    )
}
