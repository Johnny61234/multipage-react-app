import { Link, useNavigate } from 'react-router-dom';
import { Card } from './Card.Styled';
import webDesign from '../assets/projects/web-design/web-design.jpg';
import appDesign from '../assets/projects/app-design/app-design.jpg';
import graphicDesign from '../assets/projects/graphic-design/graphic-design.jpg';
import styled from 'styled-components';

function Cards() {
    const navigate = useNavigate();

    return ( 
    <Wrapper>
        <Card onClick={() => navigate('/webdesign')} className='container' background={webDesign}>
            <h1>Web Design</h1>
            <p>view projects<svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
        </Card>
        <Card onClick={() => navigate('/appdesign')} className='container' background={appDesign}>
            <h1>App Design</h1>
            <p>view projects<svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
        </Card>
        <Card onClick={() => navigate('/graphicdesign')} className='container' background={graphicDesign}>
            <h1>Graphic Design</h1>
            <p>view projects<svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
        </Card>
    </Wrapper>
     );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 6em auto;
    gap: 1.5em;

    @media screen and (min-width: 630px) {
        gap: 1.5em;;
    }

    @media screen and (min-width: 1000px) {
        width: 1000px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        height: 30em;

        .container {

            &:first-child {
                grid-area: 1 / 1 / 3 / 2;
            }

        }
    }
`

export default Cards;