import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GetInTouch from '../components/GetInTouch';

function WebDesign() {
    return ( 
    <div>
        <h1 className='test2'>WebDesign</h1>
        <div><Link to='/appdesign'>App Design</Link></div>
        <div><Link to='/graphicdesign'>Graphic Design</Link></div>
        <GetInTouch />
    </div>
     );
}

export default WebDesign;