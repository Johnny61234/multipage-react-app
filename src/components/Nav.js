import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  return (
    <Wrapper>
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ourcompany">Our Company</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.white};
  display: none;
`

export default Nav;