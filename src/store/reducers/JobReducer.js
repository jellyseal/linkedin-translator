import { SET_JOB, CLEAR_JOB } from '../actions/JobActions';

function initialState() {
  return {
    jobUrl: [],
  };
}

export default function articleReducer(state = initialState(), action) {
  switch (action.type) {
    case SET_JOB:
      return state ?
        { ...state, jobUrl: action.payload } :
        { jobUrl: action.payload };
    case CLEAR_JOB:
      return state ?
        { ...state, jobUrl: '' } :
        { jobUrl: '' };
    default:
      return state;
  }
}
