const initialState = {
  loader: false,
  error: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP/SET-LOADER':
      return {...state, loader: action.loader};
    case 'APP/SET-ERROR':
      return {...state, error: action.error};
    default:
      return state;
  }
};

export const setLoader = loader => ({type: 'APP/SET-LOADER', loader});
export const setError = error => ({type: 'APP/SET-ERROR', error});
