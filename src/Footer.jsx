import './App.scss';
import styled from 'styled-components';

const StyledP = styled.p`
    font-size: 12px;
    text-align: center;
    width: 100%;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
`;

function Footer() {
    return (
        <footer>
            <StyledP className="attribution">
                Challenge by <a href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK">Frontend Mentor</a>.
      Coded by <a href="https://github.com/BatoolHasan/four-card-feature-section">Batool Hasan</a>.
    </StyledP>
        </footer>
    )
}

export default Footer;