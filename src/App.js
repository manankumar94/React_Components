import logo from './logo.svg'; // Assuming logo.svg is used elsewhere
import './App.css';
import Header from './Header.jsx';
// import {Header} from './Header.jsx';   // named export
import Footer from './Footer.jsx';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';

function App() {
  // let name="Manan Gautam";
  // const gender="Female";
  // const status= false;
  const headerInfo={
    name: "Manan",
    phone: 9193931251
  }
  return (
    <div className='main'> 
      {/* Using Reactive BootStrap */}
      <Header  email="manan@gmail.com" phone="9193931251"/>   {/* email , phone are prop here */}
      {/*Object passing in prop*/}
      {/* <Header info={headerInfo} /> */}

      <Container fluid>
        <Container>
          <Row>
            <Col className='text-center py-4'>
             <h3> List of Courses</h3>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Press ME</Button>
              </Card.Body>
             </Card>
            </Col>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Press ME</Button>
              </Card.Body>
             </Card>
            </Col>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Press ME</Button>
              </Card.Body>
             </Card>
            </Col>
            <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Course 4</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Press ME</Button>
              </Card.Body>
             </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>

    // <div>
    //   {/* Calling of Header component */}
    //   <Header />

    //   {/* bootstrap calling */}
    //   <div className='container'>
    //     <h2 className='text-danger'>Welcome to Home Page</h2>
    //   </div>

    //   {/* Same file component calling */}
    //   {/* <div className='row'>
    //      <Card />
    //      <Card />
    //      <Card />
    //      <Card />
    //      <Card />
    //      <Card />
    //   </div> */}
    //   <Footer />
    // </div>

    // <div className="main">
    //   <h2>Welcome to the react Lerning..</h2>
    //   <h3>Made By: {name}</h3>

    //   {/* we perform any js operation inside html tag here */}
    //   <div><h3>JS Operation inside HTML(10+20): {10+20}</h3></div>

    //   {/* Use of ternary operator */}
    //   { (gender==="Male") ? 
    //   <h3>Name is shown if gender is male {name} </h3>
    //    :
    //    <h3>Please pass correct gender(Male)</h3>}
     
    //  {(!status) ?
    //   <h2 style={{color:"blue", backgroundColor:"yellow"}}>Colour changed to Blue.</h2>
    //   :
    //   <h2 style={{color:"yellowgreen", backgroundColor:"red"}}>Color changed to Green</h2>}
    // </div>
  );
}

// here if we use {} inside jsx means we can use js concepts and if we use {{}} means we can use css inside it. We can't directly use css here
export default App;


// inside any file component
// function Card(){
//   return(
//     <div className='cardItems'>
//       <p> Card 🃏🃏 </p>
//     </div>
//   )
// }
