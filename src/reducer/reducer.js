import { ADD_BLOGPOST } from './types';

const blogReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOGPOST:
      return [...state, { title: `Blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

export default blogReducer;
