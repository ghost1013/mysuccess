import { useState, useEffect } from 'react';
import { MOCK_PROJECT } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';
import { ProjectAPI } from './ProjectAPI';

function ProjectsPage() {
  // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECT);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  // use the Promise method
  useEffect(() => {
    setLoading(true);
    ProjectAPI
      .get(1)
      .then((data) => {
        setLoading(false);
        setError('');
        setProjects(data);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
        if (e instanceof Error) {
          setError(e.message);
        }
      });
  }, []);

  //use async/await method
  // useEffect(() => {
  //   async function loadProjects() {
  //     setLoading(true);
  //     try {
  //       const data = await ProjectAPI.get(1);
  //       setError('');
  //       setProjects(data);
  //     }
  //     catch (e) {
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadProjects();
  // }, []);

  const handleSubmit = (project: Project) => {
    ProjectAPI
      .put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p: Project) => {
          return p.id === project.id ? new Project(updatedProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message);
        }
      });
  }

  return (
    <>
      <h1>Projects</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse">
                  {error}
                </span>
              </p>
            </section>
          </div>
        </div>
      )}
      <ProjectList projects={projects} onSave={handleSubmit} />
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;