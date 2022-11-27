import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  return (
    <Wrapper>
      <nav className='nav'>
        <ul>
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

  ul {
    background-color: ${props => props.theme.colors.white};
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 12em;
    display: none;

    li {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 630px) {
    ul {
      background-color: ${props => props.theme.colors.white};
      position: unset;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: unset;
      display: block;

      display: flex;
      flex-direction: row;
      gap: 2em;

      li {
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