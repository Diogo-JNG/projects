import { useState } from 'react';
import { useEffect } from 'react';
import { StyledHeader } from './styled-header';
import Menu from '../menu/menu';
import { Link } from 'react-router-dom';

import './header.css';

function Header({setMainClass,setSearchTerm}) {

    useEffect(() =>{
    function handleResize() {
      if (window.innerWidth >= 700){
        setHeaderMini(false);
        setResponsiveHeader(false);
      }else{
        setResponsiveHeader(true);
      }
    
}

    window.addEventListener('resize', handleResize)
    return e => {
        window.removeEventListener('resize', handleResize)
      
  }
    })


    const [isNotificationClicked, setIsNotificationClicked] = useState(false);
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [menuClass, setMenuClass] = useState('');
    let [responsiveHeader, setResponsiveHeader] = useState(window.innerWidth <= 700);
    let [headerMini, setHeaderMini] = useState(false);

    function mobileHeader() {
        setHeaderMini(!headerMini);

    }


    const onClickMenu = () => {
        setIsMenuClicked(!isMenuClicked)
        if (isMenuClicked) {
            setMenuClass('')
            setMainClass('')
        } else {
            setMenuClass('aside__hidden')
            setMainClass('main__solo')
        }
    }

    const onClickNotification = () => {
        setIsNotificationClicked(!isNotificationClicked);
        setIsProfileClicked(false);
    }
    const onClickProfile = () => {
        setIsProfileClicked(!isProfileClicked);
        setIsNotificationClicked(false);
    }

    return (
        <>
            <StyledHeader>
                <div className="header__desktop">
                    <div className="header__left">
                    {(headerMini && responsiveHeader) && <i onClick={mobileHeader} className="icofont-arrow-left header__back"></i> }
                        {!headerMini && <i onClick={onClickMenu} className="icofont-navigation-menu main__menu"></i>}
                        {((!headerMini && responsiveHeader) || (!headerMini && !responsiveHeader)) &&<h1 className="main__title"><i className="icofont-video main__icon"></i>ShowTime</h1>}
                    </div>
                    <div className="header__center">
                    {((responsiveHeader && headerMini) || (!responsiveHeader && headerMini) || (!responsiveHeader && !headerMini)) && <input onChange={(e) =>{setSearchTerm(e.target.value)}} className="header__searchBar" placeholder="Search..." type="search" />}
                        <i className="icofont-search normal__search"></i>
                    </div>
                    <div className="header__right">
                        {!headerMini && <i onClick={mobileHeader} className="icofont-search mini__search"></i>}
                        <i onClick={onClickNotification} className="header__notification icofont-notification"></i>
                        <i onClick={onClickProfile} className="icofont-user header__profile"></i>
                    </div>
                    <section className={`aside__notification ${isNotificationClicked && 'aside__notification__visible'}`}>
                        <p>Looks like you don't have any notifications yet <i className="icofont-sad"></i></p>
                    </section>
                    <section className={`aside__profile ${isProfileClicked && 'aside__profile__visible'}`}>
                        <div className="aside__profile__info">
                            <img className="profile__picture" src="https://picsum.photos/40" alt="Profile" />
                            <h2 className="profile__name">Name</h2>
                        </div>
                        <hr />
                        <div className="aside__profile__list">
                            <ul>
                                <li><Link to="/login">Log In</Link></li>
                                <li><Link to="/register">Sign In</Link></li>
                            </ul>

                        </div>
                    </section>
                </div>
            </StyledHeader>
            <Menu asideClass={menuClass} />
        </>
    )
}

export default Header;