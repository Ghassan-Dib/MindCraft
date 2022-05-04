import './sass/main.css';

import React from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import HeroLight from './Components/HeroLight';
import LightCTA from './Components/LightCTA';
import Partners from './Components/Partners';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { ThemeProvider } from './Components/ThemeProvider';
import data from './data/data.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Header data={data.Header} />
        <Features data={data.Features} />
        <HeroLight data={data.HeroLight} />
        <LightCTA data={data.LightCTA} />
        <Partners data={data.Partners} />
        <Testimonials data={data.Testimonials} />
        <Pricing data={data.Pricing} />
        <Contact data={data.Contact} />
        <Footer data={data.Footer} />
      </ThemeProvider>
    </div>
  );
};

export default App;
