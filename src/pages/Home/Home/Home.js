import React from 'react';
import AllProducts from '../../AllProducts/AllProducts';
import Footer from '../../Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Header from '../Header/Header';



const Home = () => {
    return (
        <div>
            <Navigation/>
            <Header/>
            <AllProducts home='home'/>
            <Footer/>
            
            
        </div>
    );
};

export default Home;