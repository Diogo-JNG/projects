import { useState } from 'react';
import { StyledMain } from './styled-main';
import './home.css';
import { carVideoData } from '../../mocks/carVideoData';
import { foodVideoData } from '../../mocks/foodVideoData';
import arrayShuffle from 'array-shuffle';

function Home({ mainClass, searchTerm }) {

    const [modal, setModal] = useState(false);
    const [url, setUrl] = useState('');
    const randomList = [...carVideoData, ...foodVideoData].slice(15.20);
    const randomArray = arrayShuffle(randomList);

    const toggleModal = () => {
        setModal(!modal);
    }

    const videoIn = (e) => {
        e.currentTarget.play();
    }
    const videoOut = (e) => {
        e.target.currentTime = 0;
        e.currentTarget.pause();
    }

    return (
        <StyledMain id="main" className={mainClass}>
            <div className="video__list" id="list__random">
                <div className="recommend__tab">
                    <p><i className="icofont-dice"></i> Random</p>
                </div>
                {randomArray.filter((e) => {
                    if (e === '') {
                        return e
                    } else if (e.name.toLowerCase().includes(searchTerm)) {
                        return e
                    }
                }).map((info) => (
                    <div key={info.id} className='video__container' data-id={info.id} data-type='cars'>
                        <video onClick={(e) => {
                            toggleModal();
                            setUrl(e.currentTarget.src);
                            localStorage.setItem(`lastVideo${e.target.closest('.video__container').getAttribute("data-id")}`, `${e.target.nextSibling.firstChild.nextSibling.textContent},${e.currentTarget.src}`);
                        }} onMouseEnter={videoIn} onMouseOut={videoOut} className='video__pre' src={info.url} loop muted></video>
                        <div className='video__info'>
                            <img src='https://picsum.photos/40' alt='cars' />
                            <p>{info.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="video__list" id="list__cars">
                <div className="recommend__tab">
                    <p><i className="icofont-car-alt-3"></i> Cars</p>
                </div>
                {carVideoData.filter((e) => {
                    if (e === '') {
                        return e
                    } else if (e.name.toLowerCase().includes(searchTerm)) {
                        return e
                    }
                }).map((info) => (
                    <div key={info.id} className='video__container' data-id={info.id} data-type='cars'>
                        <video onClick={(e) => {
                            toggleModal();
                            setUrl(e.currentTarget.src);
                            localStorage.setItem(`lastVideo${e.target.closest('.video__container').getAttribute("data-id")}`, `${e.target.nextSibling.firstChild.nextSibling.textContent},${e.currentTarget.src}`);
                        }} onMouseEnter={videoIn} onMouseOut={videoOut} className='video__pre' src={info.url} loop muted></video>
                        <div className='video__info'>
                            <img src='https://picsum.photos/40' alt='cars' />
                            <p>{info.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="video__list" id="list__food">
                <div className="recommend__tab">
                    <p><i className="icofont-food-basket"></i> Food</p>
                </div>
                {foodVideoData.filter((e) => {
                    if (e === '') {
                        return e
                    } else if (e.name.toLowerCase().includes(searchTerm)) {
                        return e
                    }
                }).map((info) => (
                    <div key={info.id} className='video__container' data-id={info.id} data-type='food'>
                        <video onClick={(e) => {
                            toggleModal();
                            setUrl(e.currentTarget.src);
                            localStorage.setItem(`lastVideo${e.target.closest('.video__container').getAttribute("data-id")}`, `${e.target.nextSibling.firstChild.nextSibling.textContent},${e.currentTarget.src}`);
                        }} onMouseEnter={videoIn} onMouseOut={videoOut} className='video__pre' src={info.url} loop muted></video>
                        <div className='video__info'>
                            <img src='https://picsum.photos/40' alt='cars' />
                            <p>{info.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            {
                modal &&
                <div className='video__modal'>
                    <i onClick={toggleModal} className='icofont-close'></i>
                    <video controls src={url}></video>
                </div>
            }
        </StyledMain>
    )

}

export default Home;