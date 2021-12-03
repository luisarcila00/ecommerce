import  {types}  from '../types/types';

// const state = {
//     name: 'Archivaldo',
//     logged: true
// }

 const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                name: 'Archivaldo',
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return {logged: true};
    }

}

export default authReducer