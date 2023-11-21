import React from 'react';

import Header from './Components/Layout/Header';
import Menu from './Components/Layout/Menu';
import Footer from './Components/Layout/Footer';
import './Assets/Fonts/static/Mulish-Black.ttf';

import Home from './Pages/Home'


const App = () => {
    return (
        <div className='font-face-gm'>
           <Header/>
           <Menu/>
           <Home/>
           <Footer/>
        </div>
    );
};

export default App;