import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../../utils/mutations';

import { QUERY_ME } from '../../utils/queries';

const CommentsList = ({ comments, isLoggedInUser = false }) => {
  const [removeComment, { error }] = useMutation
  (REMOVE_COMMENT, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveComment = async (comment) => {
    try {
      const { data } = await removeComment({
        variables: { comment },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{comment}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveComment(comment)}
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

export default CommentsList;