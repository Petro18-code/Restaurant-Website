import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { Form, Button, Container } from "react-bootstrap";
import './Review.css'; 

const Review = () => {
  const { token } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); 

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return null;
    }
  }, [token, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/review/${user._id}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ comment, rating })
      });

      if (response.ok) {
        alert("Review submitted successfully!");
        setComment("");
        setRating(0);
        navigate("/");
      } else {
        alert("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("An error occurred while submitting your review.");
    }
  };

  return (
    <Container fluid className="min-vh-100 bg-black">
      <div className="review__container">
        <h2 className="review__header">Leave a Review</h2>
        <Form onSubmit={handleSubmit} className="review__form">
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <div className="review__rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="review__star"
                  style={{
                    color: (hoverRating || rating) > index ? "gold" : "grey"
                  }}
                  onClick={() => setRating(index + 1)}
                  onMouseEnter={() => setHoverRating(index + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ★
                </span>
              ))}
            </div>
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="review__textarea"
              required
            />
          </Form.Group>
  
          <Button variant="primary" type="submit" className="review__button">
            Submit Review
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Review;
