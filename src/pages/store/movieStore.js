import React from 'react';
import { createStore } from 'redux';

const INITIAL_STATE = {
    data: []
};

const reduce = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_MOVIE':
            return { ...state, data: [...state.data, action.moviesData, action.moviesImages] }
        default: 
            return state;
    }
}



const store = createStore(reduce);

export default store;