import './App.scss';
import styled from 'styled-components';
import CardsContainer from './CardsContainer';
import Footer from './Footer';


const GrayishBlue= "hsl(229, 6%, 66%)";

// FONT WEIGHTS
const weightThin="200";
const weightRegular="400";
const weightBold="600";

const Title= styled.h1`
  font-size: 2rem;
  font-weight:${props=> props.bold|| weightThin};
  margin-top:0;
  margin-bottom:0.1em;

  @media only screen and (max-width: 715px) {
    font-size:1.6rem;
  }
`;

const Paragraph = styled.p`
  font-weight:${weightRegular};
  max-width:50ch;
  color:${GrayishBlue};

  @media only screen and (max-width: 715px) {
    width:100%;
  }
`;


const StyledApp=styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <Title>Reliable, efficient delivery</Title>
      <Title bold={weightBold} >Powered by Technology</Title>
      <Paragraph>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</Paragraph>
      <CardsContainer/>
      <Footer/>
    </StyledApp>
  );
}

export default App;
