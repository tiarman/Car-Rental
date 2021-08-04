import React from 'react';
import About from '../components/Home/About/About';
import Contact from '../components/Home/Contact/Contact';
import Footer from '../components/Home/Footer/Footer';
import Header from '../components/Home/Header/Header';
import Services from '../components/Home/Services/Services';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import SubscribeBox from '../components/Home/SubscribeBox/SubscribeBox';

const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <Services />
            <Testimonials />
            <Contact />
            <SubscribeBox/>
            <Footer />
        </main>
    );
};

export default Home;