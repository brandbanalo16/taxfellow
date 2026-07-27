"use client"
import React from 'react'

function CallToAction() {
    return (
        <div>

            {/* cta section start */}
            <div className="rts-cta-section-start rts-section-gap cta-bg-h2">
                <div className="container">
                    <div className="row">
                        <div className="cta-h2-wrapper text-center">
                            <div className="icon">
                                <a href="#">
                                    <i className="fas fa-phone-alt" />
                                </a>
                            </div>
                            <div className="body">
                                <p className="info">
                                    Ready to start or scale your business? Let our experts handle the compliance while you focus on growth.{" "}
                                    <span>(Free Consultation)</span>
                                </p>
                                <a href="tel:+918800485106" className="number">
                                    +91 88004 85106
                                </a>
                                <a href="#" className="rts-btn btn-primary-2">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CallToAction