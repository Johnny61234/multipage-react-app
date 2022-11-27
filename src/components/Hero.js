import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import heroImage from '../assets/image-hero-phone.webp';
import bgPattern from '../assets/design/bg-pattern-intro-app.svg';

function Hero() {
    return ( 
        <Wrapper>
            <h1 className="header">Award-winning custom designs and digital branding solutions</h1>
            <p className="paragraph">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Link to='/ourcompany'><Button>Learn More</Button></Link>
            <img className='image' src={heroImage} alt="" />
        </Wrapper>
     );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2em;
    padding: 5em 0.5em 27em;
    color: white;
    position: relative;
    background: 
    url(${bgPattern}), 
    ${props => props.theme.colors.orange};
    background-size: cover;
    background-position: 45%;
    overflow: hidden;
    
    .header {
        font-weight: 500;
        font-size: 1.9rem;
        line-height: 1.2;
    }

    .paragraph {
        font-size: 0.95rem;
        line-height: 1.7;
    }

    .image {
        position: absolute;
        bottom: -23.5em;
    }

    @media screen and (min-width: 630px) {
        width: 90%;
        margin: 0 auto;
        border-radius: 1em;

        .header {
            width: 12em;
        }

        .paragraph {
            width: 26em;
        }

    }

    @media screen and (min-width: 1000px) {
        width: 1000px;
        text-align: left;
        align-items: flex-start;
        padding: 8em 5em;

        .header {
            font-size: 2.5rem;
        }

        .image {
            right: -5em;
            top: -5em;
        }
    }
`

export default Hero;