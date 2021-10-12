import React, { Component } from 'react'
import {Container, Image,Carousel, Row, Col} from 'react-bootstrap'
import FamousItem from './FamousItem'
import HotDeal from './HotDeal'
import InstagramComp from './InstagramComp'

class SectionComp extends Component {
    render() {
        return (
            <div>
            <Container className="back" >
                <Carousel>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src="images/bg1.jpg"
                    alt="First slide"
                    />
                    <div className="container back-content2   font-weight-bold  font-italic">
                            <h1 className="text-capitalize">The world <br/>of extreme sports</h1>
                            <p>SAVE <span className="text-info">20%</span> ON ALL APPAREL</p>
                            <button className="btn font-weight-light text-white">SHOP NOW <i className="fas fa-arrow-right"></i></button>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src="images/bg2.jpg"
                    alt="Second slide"
                    />
                    <div className="container back-content2   font-weight-bold  font-italic">
                            <h1 className="text-capitalize">The world <br/>of extreme sports</h1>
                            <p>SAVE <span className="text-info">20%</span> ON ALL APPAREL</p>
                            <button className="btn font-weight-light text-white">SHOP NOW <i className="fas fa-arrow-right"></i></button>
                    </div>
                </Carousel.Item>
            
                </Carousel>
            </Container>


            <Container className="color-buttons">
                <Row>
                    <Col className="bg-info text-center pt-3 text-white">
                    <p><i className="fas fa-plane pr-2 "></i>FREE SHIPPING WORLDWIDE</p>
                    </Col>
                    <Col className="bg-danger mr-3 ml-3 pt-3 text-center text-white">
                    <p><i className="fas fa-sync-alt pr-2 "></i>100% MONEY BACK - 48 HOURS</p>
                    </Col>
                    <Col  className="bg-warning pt-3 text-center text-white">
                    <p><i className="fas fa-life-ring pr-2 font-weight-light"></i>24/7 ONLINE CUSTOMER SUPPORT</p>
                    
                    </Col>
                </Row>
            </Container>

      
            </div>
        )
    }
}

export default SectionComp
