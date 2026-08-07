import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, type PaletteMode } from '@mui/material';
import { getTheme } from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
    const [mode, setMode] = useState<PaletteMode>('light');

    const theme = useMemo(() => getTheme(mode), [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </ThemeProvider>
    );
}

export default App;