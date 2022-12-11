import {fetchData} from '../api/api';
import {setError, setLoader} from './appReducer';

const initialState = [];

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-DATA':
      return [...state, ...action.data];
    default:
      return state;
  }
};

export const setData = data => ({type: 'SET-DATA', data});

export const fetchDataTC = () => async dispatch => {
  try {
    const data = await fetchData();
    if (data.status === 'ok') {
      dispatch(setData(data.articles));
    } else {
      dispatch(setError(data.message));
    }
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoader(true));
  }
};
