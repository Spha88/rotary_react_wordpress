import React from 'react';
import AboutSection from '../../components/HomePageSections/AboutSection/AboutSection';
import CausesSection from '../../components/HomePageSections/CausesSection/CausesSection';
import Hero from '../../components/HomePageSections/Hero/Hero';
import JoinSection from '../../components/HomePageSections/JoinSection/JoinSection';
import LatestStories from '../../components/HomePageSections/LatestStoriesSection/LatestStories';
import PresidentSection from '../../components/HomePageSections/PresidentSection/PresidentSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <CausesSection />
            <LatestStories />
            <PresidentSection />
            <JoinSection />
        </div>
    )
}

export default Home
