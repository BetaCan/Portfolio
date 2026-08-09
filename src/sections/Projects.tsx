import { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import ProjectDialog from '../components/ProjectDialog';
import { projects, type Project } from '../data/projects';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <Box component="section" id="projects" sx={{ py: { xs: 12, md: 34 }}}>
            <Container maxWidth="lg">
                <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
                    Projects
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
        </Box>
    );
};

export default Projects;