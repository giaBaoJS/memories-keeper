import * as api from '../api';

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: 'FETCH_ALL',
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (posts) => async (dispatch) => {
  try {
    const { data } = await api.createPost(posts);
    dispatch({
      type: 'CREATE',
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
