import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class InstagramComp extends Component {
    render() {
        return (
                
        <section className="instagram-section">
            <Container>
            <h2 className="mb-5">INSTAGRAM</h2>
                <div className="text-center pos">
                    <i className="fas fa-circle text-danger mr-1 mt-5   dot-s"></i>
                    <i className="fas fa-circle text-info mr-1  dot-s"></i>
                    <i className="fas fa-circle text-warning mr-4 dot-s"></i>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col xs={2}>
                    <img src="images/i1.jpg" alt=""/>
                    </Col>
                    <Col xs={2}>
                    <img src="images/i2.jpg" alt=""/>
                    </Col>
                    <Col xs={2}>
                    <img src="images/i3.jpg" alt=""/>
                    </Col>
                    <Col xs={2}>
                    <img src="images/i4.jpg" alt=""/>
                    </Col>
                    <Col xs={2}>
                    <img src="images/i5.jpg" alt=""/>
                    </Col>
                    <Col xs={2}>
                    <img src="images/i6.jpg" alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
        )
    }
}

export default InstagramComp
