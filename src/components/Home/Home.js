import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStarRating from "react-star-ratings-component";
function Home() {
  const [services, setServices] = useState([]);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://fast-inlet-39044.herokuapp.com/addService/")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://fast-inlet-39044.herokuapp.com/review/")
      .then((response) => response.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    // home page design
    <div className="home mt-5 pt-2">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.ibb.co/C5HgwRM/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Laptop Collection</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.ibb.co/1brQLgm/2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Gaming Laptop Also Available</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://i.ibb.co/X3Mn5Vy/3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Your Choice Is Our Priority</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-3">
        <h1 className="text-danger">Our Laptop Collections</h1>
        <p className="text-success fw-bold">We are offering some our our uniq laptop Collection</p>
      </div>

      {services &&
        services.slice(0, 6).map((item, i) => (
          <>
            <Container key={i}>
              <Row className="pb-4">
                <Col sm={12} md={6} lg={6} xl={6}>
                  <Image className="service-img" src={item.image} />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                  <ListGroup vertical>
                    <ListGroup.Item>
                      <h2>{item.serviceName}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Price: {item.serviceCharge}
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Description : {item.serviceDescription}
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="add-member-btn">
                    <Link to={`/service/${i}`}>
                      <Button>Buy Now</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        ))}
      <h1
        className="text-danger"
      >
        Customer Reviews and Ratings
      </h1>
      {review &&
        review.map((item, i) => (
          <>
            <Container key={i}>
              <Row className="pb-4">
                <Col sm={12} md={12} lg={12} xl={12} className="right-column">
                  <ListGroup vertical>
                    <ListGroup.Item>
                      <h4> Customer Name: {item.username}</h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Product Name: {item.productname}
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Customer  Rating
                        <ReactStarRating
                          numberOfStar={5}
                          numberOfSelectedStar={item.Rating}
                          colorFilledStar="yellow"
                          colorEmptyStar="black"
                          starSize="20px"
                          spaceBetweenStar="10px"
                          disableOnSelect={false}
                          onSelectStar={(val) => {
                            console.log(val);
                          }}
                        />
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </>
        ))}

      <Container className="square border support my-5 bg-warning">
        <Row>
          <Col sm={12} md={6} lg={6} xl={6} className="img-fluid">
            <img className="my-5 img-fluid" src="https://i.ibb.co/ZTjP8Sb/4.jpg" alt="" />
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} className="bg-warning">
            <h2 className="support-h2 mt-5 pt-5">Laptop Valley Provides 24/7 customer support</h2>
            <h5 className="support-h5">
              Please feel free to contact us at for emergency case.Share your experience with us
              .Our helpline is always open.We tried our best to support our customer.Thank you
            </h5>
            <Button variant="danger" className="support-button">
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
