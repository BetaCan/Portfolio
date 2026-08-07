import { Container, Grid, Typography, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <Box component="section" id="projects" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
                    Projects
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;