import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
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
            <AboutUs home="home"/>
            <Footer/>
            
            
        </div>
    );
};

export default Home;