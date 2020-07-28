const initState= {}

const authReducer=(state=initState, action) => {
    switch (action.type) {
        case 'CREATE_USER_SUCCESS':
          console.log('create user success');
          return state;
        case 'CREATE_USER_ERROR':
          console.log('create user error');
          return state;
        default:
          return state;
      }
}
export default authReducer;