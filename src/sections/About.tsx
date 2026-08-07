import { Container, Typography, Box, Chip, Stack, Grid, Paper } from '@mui/material';

const skills = [
    'JavaScript', 'TypeScript', 'React', 'React Native', 'Java', 'Kotlin',
    'Jetpack Compose', 'Node.js', 'Material UI', 'REST APIs', 'Git', 'CI/CD', 'Agile',
];

const experience = [
    {
        role: 'Junior Developer',
        company: 'CSE Connect',
        period: '',
        description: 'Worked as a junior developer contributing to real projects and codebases.',
    },
    {
        role: 'Team Lead (Internship)',
        company: 'Kingston University',
        period: '',
        description: 'Led a small team through an internship project at Kingston University.',
    },
    {
        role: 'Academic Mentor',
        company: 'Kingston University',
        period: '2 years',
        description: 'Ran programming workshops, helping students build practical coding skills.',
    },
];

const About = () => {
    return (
        <Box component="section" id="about" sx={{ py: { xs: 4, md:8 }, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
                    About
                </Typography>

                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="body1" sx={{ mb: 4 }}>
                            I graduated from Kingston University with a First Class Honours degree in
                            Computer Science with Software Engineering. I like building things end to
                            end — from a REST API to the interface someone actually taps on — and I'm
                            currently looking for graduate roles where I can keep doing that.
                        </Typography>

                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Tech Stack
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {skills.map((skill) => (
                                <Chip key={skill} label={skill} />
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Experience
                        </Typography>
                        <Stack spacing={2}>
                            {experience.map((job) => (
                                <Paper key={job.role + job.company} variant="outlined" sx={{ p: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        {job.role}
                                    </Typography>
                                    <Typography variant="body2" color="primary" sx={{ mb: 0.5 }}>
                                        {job.company} {job.period && `· ${job.period}`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {job.description}
                                    </Typography>
                                </Paper>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;