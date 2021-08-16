import React from 'react';
import { createStore } from 'redux';

const INITIAL_STATE = {
    movies: []
};

const reduce = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_MOVIE':
            return  state.push(action.title);
        default: 
            return state;
    }
}



const store = createStore(reduce);

export default store;