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
            <Nav />
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