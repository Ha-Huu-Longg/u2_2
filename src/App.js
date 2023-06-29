import './App.css';
import { Button, Card, Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';

function App() {
    return (
        <Container>
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

            <Row>
                <p style={{ padding: "30px 0", textAlign: 'center' }}>&copy; 2023 Your Company. All rights reserved.</p>
            </Row>

        </Container>
    );
}

export default App;
