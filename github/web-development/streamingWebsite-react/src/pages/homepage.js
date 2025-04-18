import { useState } from 'react';
import Header from '../components/header/header';
import Home from  '../components/home/home';



function Homepage (){

    const [mainClass, setMainClass] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <>
        <Header setMainClass={setMainClass} setSearchTerm={setSearchTerm}/>
        <Home mainClass={mainClass} searchTerm={searchTerm}/>
        </>
    )
}

export default Homepage;