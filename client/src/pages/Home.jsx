import { useQuery } from '@apollo/client';

import { QUERY_PROFILES } from '../utils/queries';

import ProjectList from '../components/ProjectList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_PROFILES);
    const projects = data?.projects || [];
  
    return (
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-10 my-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ProjectList
                projects={projects}
                title="Here's the current roster of friends..."
              />
            )}
          </div>
        </div>
      </main>
    );
  };
  
  export default Home;