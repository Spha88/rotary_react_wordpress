import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import Hero from '../../components/Hero/Hero';
import NextEventSection from '../../components/NextEventSection/NextEventSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <NextEventSection />
        </div>
    )
}

export default Home
