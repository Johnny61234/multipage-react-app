import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GetInTouch from '../components/GetInTouch';

function GraphicDesign() {
    return ( 
    <div>
        <h1>Graphic Design</h1>
        <div><Link to='/webdesign'>Web Design</Link></div>
        <div><Link to='/appdesign'>App Design</Link></div>
        <GetInTouch />
    </div>
     );
}

export default GraphicDesign;