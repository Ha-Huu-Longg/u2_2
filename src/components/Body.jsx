import React from 'react'
import { Button, Card, Col, Nav, NavDropdown, Row } from 'react-bootstrap';

const Body = () => {
    return (
        <Row>
            <Col xs={3}>
                <Nav className="flex-column gap-nav">
                    <Nav.Link className="text-dark">Shirts</Nav.Link>
                    <Nav.Link className="text-dark">Dresses</Nav.Link>

                    <NavDropdown title="Jeans" id="navbarScrollingDropdown">
                        <NavDropdown.Item>Skinny</NavDropdown.Item>
                        <NavDropdown.Item>Relaxed</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Bootcut</NavDropdown.Item>
                        <NavDropdown.Item>Straight</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className="text-dark" >Jackets</Nav.Link>
                    <Nav.Link className="text-dark" >Gymwear</Nav.Link>
                    <Nav.Link className="text-dark" >Blazers</Nav.Link>
                    <Nav.Link className="text-dark" >Shoes</Nav.Link>
                </Nav>
            </Col>

            <Col xs={9}>
                <Row><p>8 items</p></Row>
                <Row className='gap-item'>
                    {new Array(8).fill(null).map(() => (
                        <Col xs={3}>
                            <Card>
                                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}

export default Body