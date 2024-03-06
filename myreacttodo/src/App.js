import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container"
import { Row, Col, InputGroup, Button, FormControl } from "react-bootstrap"
import { Component } from 'react';

class App extends Component {

  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InputGroup>
              <FormControl placeholder='add item...'
                size='lg'
                value
                onChange={() => { }}
                aria-label="add something"
                aria-describedby="basic-addon2"

              />
              <InputGroup>
                <Button
                  variant='dark'
                  className='mt-2'
                  onClick={() => { }}>
                  ADD
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
