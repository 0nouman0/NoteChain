import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Features from './components/home/Features';
import Team from './components/home/Team';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <Team />
    </Layout>
  );
}

export default App;