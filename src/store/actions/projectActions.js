export const createProject=(project)=> {
    return(dispatch, getState)=> {
        //async call to database here
        //
        dispatch({type: 'CREATE_PROJECT', project});
    }
}