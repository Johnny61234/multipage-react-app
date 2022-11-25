import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
  return (
    <div>
      <div><Link to='/webdesign'>Web Design</Link></div>
      <div><Link to='/appdesign'>App Design</Link></div>
      <div><Link to='/graphicdesign'>Graphic Design</Link></div>
    </div>
  );
}

export default Home;
