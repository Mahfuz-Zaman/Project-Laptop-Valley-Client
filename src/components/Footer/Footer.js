import React from 'react';
import "./Footer.css"
import { Col, Container, Row } from 'react-bootstrap';
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-4 gradiant">
        <Container>
          <Row>
            <Col md={4}>
              <img src="https://i.ibb.co/QHV9LRz/5.jpg" alt="" />
            </Col>
            <Col md={2}>
              <ul className="list-unstyled">
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>About us</p>
                </li>

                <li>
                  <p>Services</p>
                </li>

              </ul>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled clist">
                    <li>Brands</li>
                    <li>Location</li>
                    <li>Pre-Order</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <div className=" my-2">
                    <FontAwesomeIcon icon={faLaptop} /> Laptop valley
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span className="ms-1 fs-6"> Mirpur,Dhaka,Bangladesh</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span className="ms-1 fs-6"> Official:laptop.valley24@gmail.com"</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} />
                      <span className="ms-1 fs-6"> Helpline: +8802-566895(Available: 24 hours)</span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="m-0 ">
          <hr className="m-0 p-0" />
          <p className="text-center text-warning m-0 py-3">
            Copyright © All Reserved by Mahfuz Zaman in 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;