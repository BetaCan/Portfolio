import { useState, useEffect } from 'react';
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
    Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <Slide appear={false} direction="down" in={visible}>
                <AppBar position="fixed" color="default" elevation={2}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, cursor: 'pointer' }}
                            onClick={() => scrollToSection('home')}
                        >
                            Canute Dsouza
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                            {navLinks.map((link) => (
                                <Button key={link.id} onClick={() => scrollToSection(link.id)}>
                                    {link.label}
                                </Button>
                            ))}
                        </Box>

                        <IconButton
                            sx={{ display: { xs: 'flex', sm: 'none' } }}
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Slide>

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