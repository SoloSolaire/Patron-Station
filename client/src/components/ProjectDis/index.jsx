import { useMutation } from '@apollo/client';

import { QUERY_ME } from '../../utils/queries';

const ProjectDis = ({ projects, isLoggedInUser = false }) => {
  const [removeProject, { error }] = useMutation
  (REMOVE_Project, {//fix this
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveProject = async (project) => {
    try {
      const { data } = await removeProject({
        variables: { project },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {projects &&
          projects.map((project) => (
            <div key={project} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <p>{project}</p>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveProject(project)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ProjectDis;
