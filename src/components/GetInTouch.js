import styled from 'styled-components';
import bgPattern from '../assets/design/bg-pattern-intro-app.svg';

function GetInTouch() {
    return ( 
        <Wrapper>
            <h1 className='title'>Let's talk about your project</h1>
            <p className='paragraph'>Ready to take it to the next level? Contact us today and find out how our enterprise can help your business grow.</p>
            <button className='button'>Get In Touch</button>
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

    .button {
        align-self: center;
        border-radius: 0.5em;
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.black};
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        padding: 1.25em 1.5em;
        border: none;
        cursor: pointer;
        transition: 100ms;

        &:hover {
            background-color: ${props => props.theme.colors.orangeLight};
            color: ${props => props.theme.colors.white};
            transition: 100ms;
        }
    }

`

export default GetInTouch;