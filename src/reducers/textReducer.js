

// initial data
export const initialText = {
    name : '',
    email : '',
    skill : '',
    error : false
};

// text reducer
export const textReducer = (state, { type, payload }) => {
    

    switch (type) {
        case 'TEXT_LOAD' :
            return state = { ...state, ...payload }
            // return state = { ...state, name : payload.name, email : payload.email, skill : payload.skill }
       
        case 'ERROR_LOAD' :
            let err = (payload.error === 'show' ? true : false);
            return state = { ...state, error : err }
    
        default:
            return state;
    }

};



