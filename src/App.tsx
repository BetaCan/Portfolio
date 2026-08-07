import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;