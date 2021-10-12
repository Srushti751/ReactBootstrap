import React, { Component } from 'react'
import {Col,Row,Container} from 'react-bootstrap'

class FeaturedComp extends Component {
    render() {
        return (
            <div className="featured ">
            <Container >

                <h2>FEATURED COLLECTIONS</h2>
                <div className="text-center pos">
                    <i className="fas fa-circle text-danger mr-1   dot-s"></i>
                    <i className="fas fa-circle text-info mr-1  dot-s"></i>
                    <i className="fas fa-circle text-warning mr-4 dot-s"></i>
                </div>
                <div className="feature-links ">
                    <a href="#" className=" active mr-3">NEW ARRIVAL</a><span className="mr-3">-</span>
                    <a href="#" className="text-dark mr-3">CLOTHING</a><span className="mr-3">-</span>
                    <a href="#" className="text-dark mr-3">HATS</a><span className="mr-3">-</span>
                    <a href="#" className="text-dark mr-3">SHOES</a><span className="mr-3">-</span>
                    <a href="#" className="text-dark mr-3">BAGS</a><span className="mr-3">-</span>
                    <a href="#" className="text-dark mr-3">ACCESSORIES</a>
                </div>

                <div className="feature-images ">
                    <Row>
                        <Col xs={2} className="right">
                            <img src="images/f1.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f2.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f3.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f4.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f5.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f6.jpg" alt=""/>
                        </Col>
                    </Row>
                    <Row className="mb-5 pb-5">
                        <Col xs={2} className="right">
                            <img src="images/f7.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f8.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f9.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f10.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f11.jpg" alt=""/>
                        </Col>
                        <Col xs={2} className="right">
                            <img src="images/f12.jpg" alt=""/>
                        </Col>
                    </Row>
                </div>

            </Container>
            </div>
        )
    }
}

export default FeaturedComp
