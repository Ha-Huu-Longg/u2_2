import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Row className='align-items-center'>
            <Col xs={3} style={{ padding: 28 }}>
                <h2>LOGO</h2>
            </Col>
            <Col xs={9}>
                <Row className='align-items-center'>
                    <Col xs={10}>
                        <span style={{ fontSize: 20 }}>Jeans</span>
                    </Col>
                    <Col xs={2}>
                        <Row>
                            <Col xs={6} className='flex-icon'>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Col>
                            <Col xs={6} className='flex-icon'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Header