import React from 'react'

function WorkingProcess() {
    return (
        <div>
            {/* our working Process */}
            <div className="working-process-area rts-section-gap working-process-bg" id='goal'>
                <div className="container">
                    <div className="row mt--40">
                        <div className="title-area text-center working-process">
                            <span>How We Work</span>
                            <h2 className="title">Our 4-Step Process</h2>
                        </div>
                    </div>
                    <div className="row g-5 mt--20 align-items-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single wirking process */}
                            <div className="rts-working-process-1 text-center">
                                <div className="inner">
                                    <div className="icon">
                                        <img
                                            src="assets/images/working-step/icon/01.svg"
                                            alt="Working_process"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h6 className="title">1. Initial Consultation</h6>
                                    <p className="disc">
                                        Understanding your specific <br /> business & compliance needs.
                                    </p>
                                </div>
                            </div>
                            {/* single wirking process End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single wirking process */}
                            <div className="rts-working-process-1 process-lg text-center">
                                <div className="inner two">
                                    <div className="icon">
                                        <img
                                            src="assets/images/working-step/icon/02.svg"
                                            alt="Working_process"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h6 className="title">2. Document Collection</h6>
                                    <p className="disc">
                                        Gathering all required <br /> legal & financial paperwork.
                                    </p>
                                </div>
                            </div>
                            {/* single wirking process End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single wirking process */}
                            <div className="rts-working-process-1 text-center">
                                <div className="inner three">
                                    <div className="icon">
                                        <img
                                            src="assets/images/working-step/icon/03.svg"
                                            alt="Working_process"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h6 className="title">3. Execution & Filing</h6>
                                    <p className="disc">
                                        Fast and accurate registration <br /> and tax submissions.
                                    </p>
                                </div>
                            </div>
                            {/* single wirking process End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single wirking process */}
                            <div className="rts-working-process-1 process-lg text-center">
                                <div className="inner four">
                                    <div className="icon">
                                        <img
                                            src="assets/images/working-step/icon/04.svg"
                                            alt="Working_process"
                                        />
                                    </div>
                                </div>
                                <div className="content">
                                    <h6 className="title">4. Ongoing Compliance</h6>
                                    <p className="disc">
                                        Monthly bookkeeping, Virtual CFO <br /> and ROC support.
                                    </p>
                                </div>
                            </div>
                            {/* single wirking process End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* our working Process End */}

        </div>
    )
}

export default WorkingProcess