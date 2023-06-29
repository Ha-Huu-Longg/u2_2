import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
    return (
        <Container>
            <Header />
            <Body />
            <Footer />
        </Container>
    );
}

export default App;
