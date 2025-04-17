import { Link } from 'react-router-dom';

import './backHeader.css';

function BackHeader() {


    return (
        <header>
            <Link to='/'><i className="icofont-arrow-left header__return"></i></Link>
        </header>
    )
}

export default BackHeader;