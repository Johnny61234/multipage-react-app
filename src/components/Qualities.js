import styled from 'styled-components';
import passionate from '../assets/qualities/illustration-passionate.svg';
import resourceful from '../assets/qualities/illustration-resourceful.svg';
import friendly from '../assets/qualities/illustration-friendly.svg';
import background from '../assets/design/bg-pattern-hero-home.svg';

function Qualities() {
    return ( 
        <Wrapper>
            <div className='container'>
                <div className='container__background'>
                    <img src={passionate} alt="" />
                </div>
                <div className="container__content">
                    <h1 className='container__header'>passionate</h1>
                    <p className='container__paragraph'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>
            <div className='container'>
                <div className='container__background'>
                    <img src={resourceful} alt="" />
                </div>
                <div className="container__content">
                    <h1 className='container__header'>resourceful</h1>
                    <p className='container__paragraph'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
            </div>
            <div className='container'>
                <div className='container__background'>
                <img src={friendly} alt="" />
                </div>
                <div className="container__content">
                    <h1 className='container__header'>friendly</h1>
                    <p className='container__paragraph'>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </div>
        </Wrapper>
     );
}

export default Qualities;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5em;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 2em;
        margin: 0 1em;

        &__background {
            background: url(${background});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        &__content {
            display: flex;
            flex-direction: column;
            gap: 2em;
        }


        &__header {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 1.2rem;
            letter-spacing: 0.3em;
            color: black;
        }

        &__paragraph {
            max-width: 20em;
            line-height: 1.5;
        }
    }

    @media screen and (min-width: 500px) {
        width: 90%;
        margin: auto;

        .container {
            flex-direction: row;
            text-align: left;
            gap: 2.5em;

            &__paragraph {
                max-width: unset;
            }
        }
    }

    @media screen and (min-width: 1000px) {
        width: 1000px;
        flex-direction: row;
        gap: unset;

        .container {
            flex-direction: column;
            text-align: center;
        }
    }
`