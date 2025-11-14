// src/components/Blog.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { blogData } from '../data'; // Import the blog data

function Blog() {
  return (
    <>
      <section className="text-center mt-5">
        <h4 style={{ color: 'orange' }}>BLOG</h4>
        <h1>Blog Post</h1>
        <h5>Contrary to popular belief, Lorem ipsum dolor sit.<br/>Lorem ipsum dolor sit amet...</h5>
      </section>

      <Container as="section" className="mt-5">
        <Row className="g-4">
          {blogData.map((post, index) => (
            <Col md={4} key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={post.img} alt={post.title} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Blog;