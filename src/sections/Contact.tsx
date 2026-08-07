import { Container, Typography, Box, Stack, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
    return (
        <Box component="section" id="contact" sx={{ py: { xs: 4, md: 8 } }}>
            <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 2 }}>
                    Contact
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Feel free to reach out — happy to talk about roles, projects, or anything else.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        startIcon={<EmailIcon />}
                        href="mailto:canutekd@gmail.com"
                    >
                        Email
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        href="https://www.linkedin.com/in/canutekd/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/BetaCan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Contact;