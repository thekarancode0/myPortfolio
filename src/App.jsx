import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gradient-to-b from-violet-800 to-violet-900 scroll-smooth">

    <BrowserRouter>
      <div>
        <Header />
        {/* Scrollable sections */}
        <main className='pt-10'>
          <section id="hero">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
