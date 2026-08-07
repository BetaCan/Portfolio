export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'sprint-sync',
        title: 'Sprint Sync',
        description:
            'A full stack project management platform built solo, designed to help teams plan and track sprints.',
        techStack: ['React', 'Node.js', 'REST APIs'],
        githubUrl: 'https://github.com/BetaCan/sprint-sync',
        liveUrl: '',
        featured: true,
    },
    {
        id: 'staysafe',
        title: 'StaySafe',
        description:
            'A cross-platform safety tracking app for staying connected and secure on the go.',
        techStack: ['React Native', 'Node.js'],
        githubUrl: 'https://github.com/BetaCan/staysafe',
        liveUrl: '',
        featured: true,
    },
    {
        id: 'shiftboard',
        title: 'ShiftBoard',
        description:
            'A shift scheduling web app with break indicators, staff pairing, and under-18 hour limit enforcement.',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        githubUrl: 'https://github.com/BetaCan/shiftboard',
        liveUrl: '',
        featured: false,
    },
    {
        id: 'android-app',
        title: 'Android App',
        description:
            'A native Android app built with Kotlin and Jetpack Compose.',
        techStack: ['Kotlin', 'Jetpack Compose'],
        githubUrl: 'https://github.com/BetaCan/android-app',
        liveUrl: '',
        featured: false,
    },
];