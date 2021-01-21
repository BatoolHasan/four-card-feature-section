import './App.scss';
import styled, { keyframes } from 'styled-components';


const weightBold = "600"; //to be removed 
const weightRegular = "400"; //to be removed
const GrayishBlue = "hsl(229, 6%, 66%)";
const Title = styled.h2`
  font-size: 1.2rem;
  font-weight:${weightBold};
  margin-top:0;
  margin-bottom:0.1em;
`;

const Paragraph = styled.p`
  font-weight:${weightRegular};
  max-width:50ch;
  color:${GrayishBlue};
`;

const UpAndBig = keyframes`
  from {
        transform: translateY(0px) scale(1);
    }

    to {
        transform: translateY(-10px) scale(1.1);
    }
`;

const Container = styled.div`
    background-repeat:no-repeat;
    background-position:right 2em bottom 2em;
    padding: 2em;
    border-radius:7px;
    background-color:#fff;
    text-align:left;
    -webkit-box-shadow: 0px 13px 27px -1px rgba(76,78,97,0.2);
    -moz-box-shadow: 0px 13px 27px -1px rgba(76,78,97,0.2);
    box-shadow: 0px 13px 27px -1px rgba(76,78,97,0.2);

    &:hover{
        animation: ${UpAndBig} 0.2s linear forwards;
    }
    cursor:pointer;

`;


const Card = (props) => {
    const { borderColor, imgSrc, title, paragraph, classCard } = props;
    return (
        <Container className={classCard} style={{ borderTop: `3px solid ${borderColor}`, backgroundImage: `url(${imgSrc})` }}>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
        </Container>
    );
}

export default Card;