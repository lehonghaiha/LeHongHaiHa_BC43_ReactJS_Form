import {configureStore} from '@reduxjs/toolkit';
import formReducer from './reducers/formReducer';


export const store = configureStore({
    reducer:{
        formReducer        
    },
});