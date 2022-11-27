import { Link } from 'react-router-dom';
import GetInTouch from '../components/GetInTouch';
import Hero from '../components/Hero';
import styled from 'styled-components';
import Cards from '../components/Cards';
import Qualities from '../components/Qualities';

function Home() {
  return (
    <Wrapper>
      <Hero />
      <Cards />
      <Qualities />
      <GetInTouch />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`

export default Home;
