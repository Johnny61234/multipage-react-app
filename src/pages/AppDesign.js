import { Link } from 'react-router-dom';

function AppDesign() {
    return (
        <div>
            <h1>App Design</h1>
            <div><Link to='/webdesign'>Web Design</Link></div>
            <div><Link to='/graphicdesign'>Graphic Design</Link></div>
        </div>
     );
}

export default AppDesign;