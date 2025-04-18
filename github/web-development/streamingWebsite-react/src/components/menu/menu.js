import './menu.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    const [toggleClass, setToggleClass] = useState('');

    return (
        
          <aside id='aside' className={props.asideClass}>
            <Link to={'/'}>
            <div className="aside__options">
                <i className="icofont-home aside__content"></i>
                <p className="aside__content">Home</p>
            </div>
            </Link>
            <Link to={'/history'}>
            <div className="aside__options">
                <i className="icofont-history aside__content"></i>
                <p className="aside__content">History</p>
            </div>
            </Link>
            <div className="aside__options">
                <i className="icofont-compass aside__content"></i>
                <p className="aside__content">Explore</p>
            </div>
            <div className="aside__options">
                <i className="icofont-library aside__content"></i>
                <p className="aside__content">Library</p>
            </div>
            <hr />
            <div className="aside__options">
                <i className="icofont-ui-video-play aside__content"></i>
                <p className="aside__content">Your Videos</p>
            </div>
            <div className="aside__options">
                <i className="icofont-ui-video aside__content"></i>
                <p className="aside__content">Your Clips</p>
            </div>
        </aside> 
    );
}

export default Menu;
