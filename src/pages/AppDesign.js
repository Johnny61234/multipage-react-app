import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GetInTouch from '../components/GetInTouch';

function AppDesign() {
    return (
        <div>
            <h1>App Design</h1>
            <div><Link to='/webdesign'>Web Design</Link></div>
            <div><Link to='/graphicdesign'>Graphic Design</Link></div>
            <GetInTouch />
        </div>
     );
}

export default AppDesign;