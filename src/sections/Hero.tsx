import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box component="section" id="home" sx={{ py: { xs: 4, md: 8 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx ={{ alignItems: 'center' }}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
                            Canute Kenneth D'Souza
                        </Typography>

                        <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight: 500 }}>
                            Full Stack Developer | Mobile App Developer | Software Engineer
                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
                            First Class Honours Computer Science graduate building full stack and mobile
                            applications with React, Kotlin, and modern web tooling. I like turning
                            real problems into clean, working software.
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" size="large" onClick={scrollToProjects}>
                                View Projects
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<DownloadIcon />}
                                href="/cv/Canute_Dsouza_CV.pdf"
                                download
                            >
                                Download CV
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            component="img"
                            src={heroImage}
                            alt="Hero graphic"
                            sx={{
                                width: '100%',
                                maxWidth: 400,
                                mx: 'auto',
                                display: 'block',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;