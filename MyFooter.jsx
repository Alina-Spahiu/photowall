import React from 'react'
import{Row, Col, Container} from "react-bootstrap"
import { FaInstagramSquare, FaFacebook, FaLinkedin, FaGithubSquare, FaReact, FaReacteurope, FaBootstrap } from 'react-icons/fa';
import {DiCss3} from "react-icons/di"


export default function MyFooter() {
    return (
        <Container>
        <Row className="my-footer">
            <Col>
            <h4>Contact:</h4>
            <p>e-mail: alina.s.abbaz@gmail.com</p>
            <p>tel: +355698777542</p>
            <p> Tirane, Albania</p>
           
            </Col>


            <Col>
            <h4 style={{textDecoration:""}} className="justify-content-center">Used Technologies:</h4>
            <Row>
             <Col>
             <p> <FaReact /> React:</p>
            <p> <FaReacteurope /> Redux:</p>
             </Col>

             <Col>
             <p> <FaBootstrap /> BootStrap: </p>
            <p> <DiCss3 /> CSS: </p>
             </Col>
            
            </Row>
            
           
           
           
            </Col>
            <Col>
            <h4 style={{textDecoration:"underline"}}>Follow Me:</h4>
            <Row>
             <Col>
             <p> <FaInstagramSquare /> Instagram:</p>
            <p> <FaFacebook /> Facebook:</p>
             </Col>

             <Col>
             <p> <FaLinkedin /> LinkedIn: </p>
            <p> <FaGithubSquare /> GitHub: </p>
             </Col>
            </Row>
           
           
           
            </Col>

        </Row>
        <Row className="justify-content-center"><h4> - - - - - - © Alina Spahiu a.k.a Ruhsulin - - - - - - </h4> </Row>
        </Container>
    )
}
