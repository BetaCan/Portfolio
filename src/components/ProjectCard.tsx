import { Card, CardContent, CardMedia, CardActions, Typography, Button, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import type { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                },
            }}
        >
            {project.image && (
                <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {project.techStack.map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" />
                    ))}
                </Stack>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
                {project.githubUrl && (
                    <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Code
                    </Button>
                )}
                {project.liveUrl && (
                    <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;