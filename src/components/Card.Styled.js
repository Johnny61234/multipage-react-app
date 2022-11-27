import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    height: 15em;
    background: ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-color: gray;
    background-blend-mode: multiply;
    cursor: pointer;
    transition: 150ms;

        &:hover {
            background-color: ${props => props.theme.colors.orange};
            transition: 150ms;

            &:hover p {
                gap: 2em;
                transition: 200ms;
            }
        }

    h1 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    p {
        font-size: 0.9rem;
        letter-spacing: 0.2em;
        display: flex;
        align-items: center;
        gap: 1em;
        transition: 200ms;
    }

    @media screen and (min-width: 630px ){
        height: 10em;
    }

    @media screen and (min-width: 1000px) {
        width: unset;
        margin: unset;
        height: unset;
    }
`