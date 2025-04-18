import { useState } from 'react';
import Header from '../components/header/header';
import History from  '../components/history/history';



function Historypage (){

    const [mainClass, setMainClass] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <>
        <Header setMainClass={setMainClass} setSearchTerm={setSearchTerm}/>
        <History mainClass={mainClass} searchTerm={searchTerm}/>
        </>
    )
}

export default Historypage;