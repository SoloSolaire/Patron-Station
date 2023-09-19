import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentsList'
import ProjectDis from '../components/ProjectDis';
import Project from '../components/ProjectForm';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const User = () => {
  const { userId } = useParams();

  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_USER` query
  const user = data?.me || data?.user || {};

  // Use React Router's `<Redirect />` component to redirect to personal user page if username is yours
  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
      {userId ? `${user.name}'s` : 'Your'} friends have endorsed this
        project
      </h2>

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <Project userId={user._id} />
      </div>

      {user.projects?.length > 0 && (
        <ProjectDis
          projects={user.projects}
          isLoggedInUser={!userId && true}
        />
      )}


      {user.comments?.length > 0 && (
        <CommentList
          comments={user.comments}
          isLoggedInUser={!userId && true}
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm userId={user._id} />
      </div>
    </div>
  );
};

export default User;