import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import CausesSection from '../../components/CausesSection/CausesSection';
import Hero from '../../components/Hero/Hero';
import JoinSection from '../../components/JoinSection/JoinSection';
import LatestStories from '../../components/LatestStoriesSection/LatestStories';
import NextEventSection from '../../components/NextEventSection/NextEventSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <CausesSection />
            <LatestStories />
            <NextEventSection />
            <JoinSection />
        </div>
    )
}

export default Home
