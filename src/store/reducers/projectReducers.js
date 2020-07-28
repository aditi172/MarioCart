const initState={
    // projects:[
    //     {id:'1', title:'react app', content:'this is a simple react app'},
    //     {id:'2', title:'react app', content:'this is a simple react app'},
    //     {id:'3', title:'react app', content:'this is a simple react app'}
    // ]
};

const projectReducer=(state=initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
          console.log('create project success');
          return state;
        case 'CREATE_PROJECT_ERROR':
          console.log('create project error');
          return state;
        default:
          return state;
      }
}

export default projectReducer;