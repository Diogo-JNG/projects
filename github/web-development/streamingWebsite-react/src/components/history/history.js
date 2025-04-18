import { StyledMain } from '../home/styled-main';
import { useEffect } from 'react';
import { useState } from 'react';

function History({ mainClass,searchTerm }) {


    const [modal, setModal] = useState(false);
    const [url, setUrl] = useState('');
    const [storageData, setStorageData] = useState([]);
    const [initialRender, setInitialRender] = useState('true');
    console.log(storageData[1]);

    useEffect(() =>{
        if(initialRender){
            allStorage();
            setInitialRender(false);
    }
    },[initialRender]);

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

    function allStorage() {

        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
    
        return setStorageData(values);
    }


    return (
        <StyledMain id="main" className={mainClass}>
            <div className="video__list" id="list__random">
                <div className="recommend__tab">
                    <p><i className="icofont-history"></i> History</p>
                </div>
                {storageData.filter((e) => {
                    if (e === '') {
                        return e
                    } else if (e.split(',')[0].toLowerCase().includes(searchTerm)) {
                        return e
                    }
                }).map((info) => (
                    <div key={info.split(',')} className='video__container' data-id={info} data-type='cars'>
                        <video onClick={(e) => {
                            toggleModal();
                            setUrl(e.currentTarget.src);
                        }} onMouseEnter={videoIn} onMouseOut={videoOut} className='video__pre' src={info.split(',')[1]} loop muted></video>
                        <div className='video__info'>
                            <img src='https://picsum.photos/40' alt='cars' />
                            <p>{info.split(',')[0]}</p>
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

export default History;