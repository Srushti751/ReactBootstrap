import React, { Component } from 'react'
import {Container, Row, Col,Image} from 'react-bootstrap'

class HotDeal extends Component {
    render() {
        return (
            <section className="hot-deal">
                <Container>
                    <Row className="bg-white">
                        <Col xs={6}>
                        <img src="images/hotdeal.jpg" alt=""/>
                        </Col>
                        <Col xs={6}>
                        <h3>HOT DEALS </h3>
                        <i className="fas fa-circle text-danger mr-1   dot-s"></i>
                        <i className="fas fa-circle text-info mr-1  dot-s"></i>
                        <i className="fas fa-circle text-warning mr-4 dot-s"></i>
                        <h2 className="text-capitalize font-weight-bold">tulos draey skirts</h2>
                        <div className="rating mt-3">
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star "></i>
                            <p className="font-italic ml-2">(05 Reviews)</p>
                        </div>
                        <p className="text-danger hot-price">$230.00</p>
                        <p className="hot-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
                            unde excepturi earum accusamus tenetur distinctio labore, 
                            illum repellendus corrupti! Repudiandae saepe illo sequi ipsam impedit,
                             natus cupiditate laborum corporis voluptatibus.</p>
                        <div className="color-dots row">
                            <p className="text-dark ml-3 mr-5"><i className="fas fa-angle-double-right mr-2"></i>COLOR:</p>
                            <i className="fas fa-circle text-danger mr-4 mt-1"></i>
                            <i className="fas fa-circle text-info mr-4 mt-1"></i>
                            <i className="fas fa-circle mr-4 mt-1"></i>
                        </div>
                        <div className="size-div row">
                            <p className="text-dark ml-3 mr-5"><i className="fas fa-angle-double-right mr-2"></i>SIZE:</p>
                            <p className="size">S</p>
                            <p className="size">M</p>
                            <p className="size">L</p>
                            <p className="size">XS</p>
                        </div>
                        <div className="sale-date ml-2 row">
                            <p className="sale-d">25 <span>Days</span></p>
                            <p className="sale-d">14 <span>Hours</span></p>
                            <p className="sale-d">57 <span>Mins</span></p>
                            <p className="sale-d">43 <span>Secs</span></p>

                        </div>
                        </Col>
                    </Row>

                </Container>
        
            </section>
        )
    }
}

export default HotDeal
