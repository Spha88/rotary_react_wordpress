import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import CausesSection from '../../components/CausesSection/CausesSection';
import Hero from '../../components/Hero/Hero';
import NextEventSection from '../../components/NextEventSection/NextEventSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <NextEventSection />
            <CausesSection />
        </div>
    )
}

export default Home
