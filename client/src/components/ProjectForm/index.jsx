import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../../utils/mutations';
import { QUERY_PROJECTS } from '../../utils/queries';

import Auth from '../../utils/auth';

const Project = ({profile,}) => {
    const [formState, setFormState] = useState({
        title: '',
        description: '',
    });

    const [addProject, { error }] = useMutation
    (ADD_PROJECT, {
        refetchQueries: [
            QUERY_PROJECTS,
            'getProjects'
        ]
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = addProject({
                variables: { ...formState },
            });

            setFormState({
                title: '',
                description: '',
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name=== 'description' && value.length <= 280) {
            setFormState({ ...formState, [name]: value });
        } else if (name !== 'description') {
            setFormState({ ...formState, [name]: value});
        }
    };

    return (
        <div>
            <h3>Create a Project!</h3>
            <form
            onSubmit={handleFormSubmit}
            >
                <div>
                    <input
                        name='title'
                        placeholder="Project Title Here"
                        value={formState.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea className="col-12 col-lg-12"
                        name='description'
                        placeholder='Project Description Here'
                        value={formState.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Create Project
            </button>
          </div>
                {error && (
                    <div>
                        Something went wrong...
                    </div>
                )}
            </form>
        </div>
    );
};

export default Project;