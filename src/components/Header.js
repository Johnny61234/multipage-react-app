import { Link } from 'react-router-dom';
import Nav from "./Nav";
import logo from '../assets/logos/logo-dark.webp'
import styled from 'styled-components';

function Header() {
    return ( 
        <Wrapper>
            <div className="logo__container">
            <Link to="/"><img className="logo" src={logo}/></Link>
            </div>
            <svg className="menu" width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fill-rule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"></path></g></svg>
            {/* <Nav /> */}
        </Wrapper>
     );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 1.5em;

    .logo__container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 12em;
    }

    .menu {
        cursor: pointer;
    }

    @media screen and (min-width: 630px) {
        padding: 2em 0;
        width: 90%;
        margin: auto;

        .menu {
            display: none;
        }
    }

    @media screen and (min-width: 1000px) {
        max-width: 1000px;

        .menu {
            display: none;
        }
    }
`

export default Header;