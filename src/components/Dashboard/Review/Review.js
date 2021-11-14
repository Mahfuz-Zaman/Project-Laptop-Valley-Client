import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";
function Review() {
  const [services, setServices] = useState([]);
  const userName = useRef();
  const { user } = useAuth();
  const [rating, setRating] = useState("");
  const [product, setProductName] = useState("");
  console.log(services);
  useEffect(() => {
    fetch("https://fast-inlet-39044.herokuapp.com/addService/")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleAddService = (e) => {
    const username = userName.current.value;
    const productname = product;
    const Rating = rating;

    const newReview = {
      username,
      productname,
      Rating,
    };
    console.log(newReview);
    fetch("https://fast-inlet-39044.herokuapp.com/review/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thanks for give rating.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h3>Review Our laptops</h3>

      <h4>Enter a product </h4>
      <Form onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            value={user.displayName}
            ref={userName}
            readOnly
          />
        </Form.Group>
        <Form.Select
          aria-label="Floating label select example"
          onChange={(e) => setProductName(e.target.value)}
        >
          <option>Select Laptop</option>
          {services &&
            services.map((item, i) => (
              <option key={i}>{item.serviceName}</option>
            ))}
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Laptop Rating</Form.Label>
          <Form.Select
            aria-label="Floating label select example"
            onChange={(e) => setRating(e.target.value)}
          >
            <option>Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Review;
