import styled from 'styled-components';

export const Button = styled.button`
    align-self: center;
    border-radius: 0.5em;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    padding: 1.25em 1.5em;
    border: none;
    cursor: pointer;
    transition: 100ms;
    position: relative;
    z-index: 1;

    &:hover {
      background-color: ${(props) => props.theme.colors.orangeLight};
      color: ${(props) => props.theme.colors.white};
      transition: 100ms;
    }
 
`