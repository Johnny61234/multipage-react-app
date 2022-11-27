import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgPattern from '../assets/design/bg-pattern-intro-app.svg';
import { Button } from './Button';

function GetInTouch(props) {
    return ( 
        <Wrapper>
            <h1 className='title'>Let's talk about your project</h1>
            <p className='paragraph'>Ready to take it to the next level? Contact us today and find out how our enterprise can help your business grow.</p>
            <Link to='/contact'><Button>Get In Touch</Button></Link>
        </Wrapper>
     );
}

const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    background-color: ${props => props.theme.colors.orange};
    background-image: url(${bgPattern});
    background-size: unset;
    background-position: 43%;
    margin: auto;
    border-radius: 1em;
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 4em 0;
    transform: translateY(50%);
    color: white;

    .title {
        font-size: 2rem;
        line-height: 1;
        font-weight: 500;
        padding: 0 1.5em;
    }

    .paragraph {
        font-size: 0.9rem;
        padding: 0;
        margin: 1.5em;
        line-height: 1.5;
    }

    @media screen and (min-width: 630px) {
        transform: translateY(25%);
        align-items: center;

        .title {
            width: 10em;
        }
        .paragraph {
            width: 30em;
        }
    }

    @media screen and (min-width: 1000px) {
        width: 1000px;
    }
`

export default GetInTouch;