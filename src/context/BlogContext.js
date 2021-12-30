import React, { useReducer } from 'react';
import blogReducer from '../reducer/reducer';
import { ADD_BLOGPOST } from '../reducer/types';
import createDataContext from './createDataContext';

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: ADD_BLOGPOST });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
