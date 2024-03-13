import React from 'react';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
        <Container>
            <Row>
                <Col lg={12}>
                    <h4>Wizard Swap</h4>

                    <p>Wateenswap The #1 AMM and yield farm on Binance Smart Chain.</p>

                    <div className="home-body"></div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home