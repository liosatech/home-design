import React from 'react';

import Header from './Components/Layout/Header';
import Menu from './Components/Layout/Menu';
import Footer from './Components/Layout/Footer';
import SearchBox from './Components/Layout/Menu/SearchBox ';

import './Assets/Fonts/static/Mulish-Black.ttf';
import Home from './Pages/Home'


const App = () => {
    return (
        <div className='font-face-gm'>
           <Header/>
           <Menu/>
           <SearchBox />
           <Home/>
           <Footer/>
        </div>
    );
};

export default App;