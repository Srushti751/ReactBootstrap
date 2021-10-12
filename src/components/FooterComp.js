import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class FooterComp extends Component {
    render() {
        return (
            <div>
                <section className="footer-section">
                <Container>
                    <div className="footer-content">
                        <img src="images/face.jpg"  alt=""/>
                        <p className="font-weight-light text-center font-italic face-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                            praesentium excepturi adipisci ullam! Tempora eos minus inventore nobis et dolorem</p>
                        <p className="text-white face-name">BILLY GRAHAM <span className="font-weight-light font-italic">Web Designer</span></p>
                        
                    </div>
                </Container>
               
                
        </section>
        <section className="social-media">
            <Container>
                <Row>
                    <Col className="facebook-col text-white  text-center font-weight-light ">
                        <p className="pt-2 "><i className="fab fa-facebook-f mr-2"></i>FACEBOOK</p>               
                    </Col>
                    <Col className=" twitter-col  text-white  text-center font-weight-light text-uppercase">
                        <p className="pt-2"><i className="fab fa-twitter mr-2"></i>twitter</p>
                    </Col>
                    <Col className=" instagram-col text-white  text-center font-weight-light  text-uppercase">
                        <p className="pt-2"><i className="fab fa-instagram mr-2"></i>instagram</p>
                    </Col>
                    <Col className=" dribble-col  text-white text-center  font-weight-light  text-uppercase">
                        <p className="pt-2"><i className="fas fa-basketball-ball mr-2"></i>dribble</p>
                    </Col>
                    <Col className=" pinterest-col text-white text-center  font-weight-light  text-uppercase">
                        <p className="pt-2"><i className="fab fa-pinterest-p mr-2"></i>pinterest</p>
                    </Col>
                </Row>
            </Container>
    
        </section>

        <section className="payment-method">
                <Container >
                <img src="images/logo_f.jpg" alt=""/>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptates. Possimus tenetur officiis recusandae est error. Itaque, voluptate magnam dolor modi rerum recusandae fugiat iure eius fuga consequatur ad ab..</p>
                <div className="text-center pos">
                    <i className="fas fa-circle text-danger mr-1   dot-s"></i>
                    <i className="fas fa-circle text-info mr-1  dot-s"></i>
                    <i className="fas fa-circle text-warning mr-4 dot-s"></i>
                </div>
                <div className="pay-logos ">
                    <img src="images/p1.png" className="mr-2" alt=""/>
                    <img src="images/p2.png" className="mr-2" alt=""/>
                    <img src="images/p3.png" className="mr-2" alt=""/>
                    <img src="images/p4.png" className="mr-2" alt=""/>
                    <img src="images/p5.png" className="mr-2" alt=""/>
                    <img src="images/p6.png" className="mr-2" alt=""/>
                </div>
                </Container>
                
            
        </section>


        <footer className="footer mt-3">
            <p className="font-weight-light text-center">Copyright &copy; 2016.- All rights reserved</p>
        </footer>
    </div>
        )
    }
}

export default FooterComp
