import { Link } from 'react-router-dom';

function GraphicDesign() {
    return ( 
    <div>
        <h1>Graphic Design</h1>
        <div><Link to='/webdesign'>Web Design</Link></div>
        <div><Link to='/appdesign'>App Design</Link></div>
    </div>
     );
}

export default GraphicDesign;