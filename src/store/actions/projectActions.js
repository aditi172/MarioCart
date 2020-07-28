import { API, Storage } from "aws-amplify";

// var authFirst;
// var authlast;
var data;
var newp;
var newps;

export const createProject=(project)=> {

    return(dispatch, getState)=> {

        if(project.file) {
            Storage.put(project.filename, project.file)
           .then(()=> console.log("successfully added to bucket"))
           .catch((er)=>console.log("error while saving to s3"+er));
        }
        API.get('userapi', '/users/object/userId', {
           userId: project.user
           }).then((user)=> {
               data=user
               console.log(data)
               console.log(data.projects)
           }).then(()=> {
               newp={
                   title: project.title,
                   content: project.content,
                   authorfirstname: data.firstname,
                   authorlastname: data.lastname,
                   authorid: project.username,
                   file: project.filename,
                   timestamp: project.timestamp
               }
               newps=[newp, ...data.projects];
           }).then(()=> {
                API.put('userapi', '/users', {
                    body: {
                        projects: newps
                    }
                }).then(() => {
                    dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
                }).catch(err => {
                    dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
                });
           }).catch((er)=> console.log(er))
        //async call to database here
    }
  }