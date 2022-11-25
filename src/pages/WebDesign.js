import { Link } from 'react-router-dom';

function WebDesign() {
    return ( 
    <div>
        <h1 className='test2'>WebDesign</h1>
        <div><Link to='/appdesign'>App Design</Link></div>
        <div><Link to='/graphicdesign'>Graphic Design</Link></div>
    </div>
     );
}

export default WebDesign;