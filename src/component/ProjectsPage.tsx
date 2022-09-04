import { MOCK_PROJECT } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';
function ProjectsPage() {
    const handleSubmit = (project: Project) => {
        console.log(project);
    }
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={MOCK_PROJECT} onSave={handleSubmit} />
        </>
    );
}

export default ProjectsPage;