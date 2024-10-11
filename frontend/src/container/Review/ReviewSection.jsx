import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import './ReviewSection.css';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/review/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <Container fluid className="review-section section__padding">
      <h2 className="section-title p__opensans">What Our Customers Say</h2>
      <Row className="reviews-container">
        {reviews.length === 0 ? (
          <p className="no-reviews-text">No reviews available yet.</p>
        ) : (
          reviews.map((review) => (
            <Col lg={4} md={6} sm={12} key={review._id} className="review-card-col">
              <Card className="review-card mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title className="rating-title">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <span key={index} className="star-filled">★</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, index) => (
                      <span key={index} className="star-empty">★</span>
                    ))}
                  </Card.Title>
                  <Card.Text className="review-comment mt-3">{review.comment}</Card.Text>
                  <Button variant="primary" className="review-cta-btn mt-2">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ReviewSection;
