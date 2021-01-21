import './App.scss';
import styled from 'styled-components';
import Card from './Card';
import Data from './cardsData';

const GridContainer = styled.div`
    display:grid;
    grid-template-rows: repeat(4, 8em);
    grid-template-columns: repeat(3, 1fr);
    max-width:1420px;
    padding:3em 4em;
    column-gap:2em;
    row-gap:2em;

    @media only screen and (max-width: 1035px) {
       width:100%;
       grid-template-rows: repeat(2, 16em);
       grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 715px) {
       width:100%;
       grid-template-rows: repeat(4, 16em);
       grid-template-columns: repeat(1, 1fr);
       padding:0;
       margin-top:3em;
    }
`;




const CardsContainer = () => {
    return (
        <GridContainer>
            {Data.map((d, i) => <Card key={i} classCard={"card-" + (i + 1)} borderColor={d.borderColor} imgSrc={d.imgSrc} title={d.title} paragraph={d.paragraph} />)}
        </GridContainer>
    );
}

export default CardsContainer;