import { useState } from 'react';
import { MOCK_PROJECT } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';
function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECT);
    const handleSubmit = (project: Project) => {
        let updatedProjects = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProjects);
    }
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={projects} onSave={handleSubmit} />
        </>
    );
}

export default ProjectsPage;