import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';

import UserList from '../components/UserList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
  
    return (
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-10 my-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <UserList
                users={users}
                title="Here's the current roster of users"
              />
            )}
          </div>
        </div>
      </main>
    );
  };
  
  export default Home;