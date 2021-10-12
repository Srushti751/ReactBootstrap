import React, { Component } from 'react'
import { Col, Container,Row,Form, Button } from 'react-bootstrap'
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForfName = RegExp(/^[a-zA-Z '.-]*$/);
const regForMob=RegExp(/^([+]\d{2})?\d{10}$/);
const regForPass=RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);
const nameNode = document.getElementById("name")
const mailNode = document.getElementById("mail")
const numNode = document.getElementById("mobile")
const msgNode = document.getElementById("msg")
const errorText = document.querySelector(".al-txt");


class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname:null,
             email:null,
             phone:null,
             msg:null,
             errors:{
                 fname:"",
                 email:"",
                 phone:"",
                 msg:""
             }
        }
    }
   
    handler=(e)=>{
        const {name,value}= e.target
        let errors = this.state.errors

        switch (name) {
            case "fname": 
                errors.fname=( regForfName.test(value)? "":"Please Enter Valid name"  )
                break;
            case "email": 
                errors.email= regForEmail.test(value)? "":"Please Enter Valid email, eg:abc@gm.com"  
                break;
            case "phone": 
                errors.phone= regForMob.test(value)? "":"Use proper format 91, and should have ,max 10 numbers"  
                break;
        
            default:
                break;
        }

        this.setState({errors,[name]:value})
    }
        validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
        submit=(e)=>{
            e.preventDefault()
            if(this.state.fname==null|| this.state.email==null|| this.state.phone==null){
                alert("All Field are required")
            }
            else if(this.validate(this.state.errors)){
                // this.setState({successmsg:"Application Submitted Successfully"})

                if(document.getElementById("name") && document.getElementById("mail") && document.getElementById("mobile") && document.getElementById("msg")){
                    document.getElementById("name").value = null ;
                    document.getElementById("mail").value = null ;
                    document.getElementById("mobile").value = null ;
                    document.getElementById("msg").value = null ;

                }
                if(document.querySelector(".al-txt")){
                    document.querySelector(".al-txt").style.display = "block";
                }
               
            }
            else{
                alert("invalid");
                // this.setState({errmsg:"Failed to Submit"})

            }
        }
        
          
    render() {
        const {errors} = this.state
        return (
            <div>
                <section className="form-error">
                    <div className="alert alert-success alert-dismissible fade show al-txt" role="alert">
                        <strong>Thank you!!!</strong> We will reach back soon.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </section>
                <section className="contact-form">
                    <Container>
                        <Row>
                            <Col md={2} className="bg-warning div1">
                                <i className="fas fa-envelope"></i>
                                <h2>Contact Us</h2>
                                <p>We would love to hear from you!</p>
                            </Col>
                            <Col md={10} className="bg-dark div2">

                            <Form  className="form"  onSubmit={this.submit}>
                                <Form.Group as={Row} className="mb-3 text-white" >
                                    <Form.Label column sm="2">
                                    Name
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" className="mb-4" name="fname"  id="name" onChange={this.handler}  placeholder="Enter Name" />
                                        {errors.fname.length>0 && <span style={{color:"red"}}>{errors.fname}</span>}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 text-white">
                                    <Form.Label column sm="2">
                                    Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="email" className="mb-4"  id="mail" onChange={this.handler}  placeholder="Enter Email"/>
                                        {errors.email.length>0 && <span style={{color:"red"}}>{errors.email}</span>}

                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3 text-white">
                                    <Form.Label column sm="2">
                                    Phone
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="phone"  className="mb-4" id="mobile" onChange={this.handler}  placeholder="Enter Phone"/>
                                        {errors.phone.length>0 && <span style={{color:"red"}}>{errors.phone}</span>}
                                   
                                    </Col>
                                </Form.Group>
                                <Form.Group  as={Row} className="mb-3 text-white">
                                    <Form.Label column sm="2">
                                        Messgae
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" name="msg" as="textarea" className="mb-4" rows={5}  id="msg" cols={30}onChange={this.handler}   placeholder="Your message ..."/>
                                    </Col>
                                </Form.Group>
                                <div className="form-group">
                                        <Button type="submit" className="btn btn-warning" id="submit" >Submit</Button>
                                        <Button type="reset" className="btn btn-warning ml-3" id="reset" >Reset</Button>

                                </div>
                            </Form>



                            
                            </Col>
                        </Row>
                    </Container>
              
            
        </section>
            </div>
        )
    }
}

export default Contact
