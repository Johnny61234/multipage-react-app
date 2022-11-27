import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRef } from 'react';

function Nav(props) {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('show__nav')
  }

  return (
    <Wrapper>
      <svg onClick={showNavBar} className="nav__open" width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fill-rule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"></path></g></svg>
      <nav>
        <ul ref={navRef}>
          <svg onClick={showNavBar} className='nav__close' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />   <path d="M15 5v2a2 2 0 0 0 2 2h2" />   <path d="M5 15h2a2 2 0 0 1 2 2v2" />   <path d="M5 9h2a2 2 0 0 0 2 -2v-2" /> </svg>
          <li><Link to="/ourcompany">Our Company</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> 
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.white};

  svg {
    cursor: pointer;

    &:active {
      transform: translateY(0.25em);
      transition: 150ms;
    }
  }

  .nav__close {
    position: fixed;
    top: 0;
    right: 0;
    margin: 1.5em;
    cursor: pointer;
  }

  ul {
    background-color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    width: 50%;
    height: 100vh;
    padding-top: 12em;
    transform: translateX(100%);
    transition: 150ms;
    z-index: 9999;

    li {
      font-size: 1.5rem;
      padding: 0.5em 1em;
      font-size: 1.3em;
    }
  }

  .show__nav {
    transform: translateX(0);
  }

  @media screen and (min-width: 630px) {
    svg {
      display: none;
    }

    ul {
      background-color: ${props => props.theme.colors.white};
      position: unset;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: unset;
      width: unset;
      display: block;
      display: flex;
      flex-direction: row;
      gap: 2em;

      height: unset;
      padding-top: unset;
      transform: unset;

      li {
        padding: unset;
        font-size: 0.9rem;
        text-transform: uppercase;
        color: ${props => props.theme.colors.gray};
        font-weight: 400;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export default Nav;