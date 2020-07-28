import {API, Auth} from 'aws-amplify';

export const createUser=(user)=> {
    return(dispatch, getState)=> {
        API.post('userapi', '/users', {
            body: {
                firstname: user.firstname,
                lastname: user.lastname,
                projects: ''
            }
        }).then(() => {
            dispatch({ type: 'CREATE_USER_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'CREATE_USER_ERROR' }, err);
          });
    }
}
