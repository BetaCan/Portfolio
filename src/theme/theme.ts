import { createTheme, type PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#9c27b0',
            },
            background: {
                default: mode === 'light' ? '#fafafa' : '#121212',
                paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
            h1: { fontWeight: 700 },
            h2: { fontWeight: 600 },
        },
        shape: {
            borderRadius: 8,
        },
    });