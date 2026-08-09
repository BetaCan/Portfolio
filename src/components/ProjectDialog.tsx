import { Dialog, DialogContent, DialogTitle, IconButton, Typography, Chip, Stack, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import type { Project } from '../data/projects';

interface ProjectDialogProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
    if (!project) return null;

    return (
        <Dialog
            open={Boolean(project)}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            sx={{
                '& .MuiDialog-paper': {
                    width: '90vw',
                    maxHeight: '85vh',
                },
            }}
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {project.title}
                <IconButton onClick={onClose} aria-label="Close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                {project.image && (
                    <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{ width: '100%', borderRadius: 1, mb: 3 }}
                    />
                )}

                <Typography variant="body1" sx={{ mb: 3 }}>
                    {project.description}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.techStack.map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" />
                    ))}
                </Stack>

                <Stack direction="row" spacing={2}>
                    {project.githubUrl && (
                        <Button
                            startIcon={<GitHubIcon />}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                        >
                            Code
                        </Button>
                    )}
                    {project.liveUrl && (
                        <Button
                            startIcon={<LaunchIcon />}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                        >
                            Live Demo
                        </Button>
                    )}
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDialog;