import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container"
import { Row, Col, InputGroup, Button, FormControl } from "react-bootstrap"
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import InterviewQues from './components/interviewQues';
import IQ2 from './components/IQ2';
import DynamicInputField from './components/DynamicInputField';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       userInput: "",
//       list: []
//     }
//   }
//   addItem = () => {
//     if (this.state.userInput !== "") {
//       const userInput = {
//         id: Math.random(),
//         value: this.state.userInput
//       }
//       const list = [...this.state.list]
//       list.push(userInput)

//       this.setState({ list, userInput: "" })
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col>
//             <InputGroup>
//               <FormControl placeholder='add item...'
//                 size='lg'
//                 value={this.state.userInput}
//                 // onChange={() => { }}
//                 aria-label="add something"
//                 aria-describedby="basic-addon2"

//               />
//               <InputGroup>
//                 <Button
//                   variant='dark'
//                   className='mt-2'
//                   onClick={() => { this.addItem() }}>
//                   ADD
//                 </Button>
//               </InputGroup>
//             </InputGroup>
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// }
function App() {
  return (
    <>
      {/* <InterviewQues/> */}
      {/* <IQ2 /> */}
      <DynamicInputField />
    </>
  );
}

export default App;
