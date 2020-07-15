const initState={
    projects:[
        {id:'1', title:'react app', content:'this is a simple react app'},
        {id:'2', title:'react app', content:'this is a simple react app'},
        {id:'3', title:'react app', content:'this is a simple react app'}
    ]
};

const projectReducer=(state=initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': 
        console.log('created project', action.project);
    }
    return(state);
}

export default projectReducer;