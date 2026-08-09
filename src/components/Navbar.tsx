import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,

} from '@mui/material';
import type { PaletteMode } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface NavbarProps {
    mode: PaletteMode;
    toggleMode: () => void;
}

const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = ({ mode, toggleMode }: NavbarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
                <AppBar position="fixed" color="default" elevation={2}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, cursor: 'pointer' }}
                            onClick={() => scrollToSection('home')}
                        >
                            Canute Kenneth D'Souza
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
                            {navLinks.map((link) => (
                                <Button key={link.id} onClick={() => scrollToSection(link.id)}>
                                    {link.label}
                                </Button>
                            ))}
                            <IconButton onClick={toggleMode} color="inherit" aria-label="Toggle dark mode">
                                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Box>

                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
                            <IconButton onClick={toggleMode} color="inherit" aria-label="Toggle dark mode">
                                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                            <IconButton onClick={() => setMobileOpen(true)} aria-label="Open menu">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

            <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
                <List sx={{ width: 220 }}>
                    {navLinks.map((link) => (
                        <ListItem key={link.id} disablePadding>
                            <ListItemButton onClick={() => scrollToSection(link.id)}>
                                <ListItemText primary={link.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;