import {
  CHANGE_SEARCH_FIELD,
  RETRIEVE_ROBOTS_PENDING,
  RETRIEVE_ROBOTS_SUCCESS,
  RETRIEVE_ROBOTS_FAILED
} from './constants';

const initialSearchState = {
  searchField: ''
}

export const searchRobots = (state=initialSearchState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD: 
      return {...state, searchField: action.payload};
    default :
      return state;
  }
}

const initialRobotsState = {
  robots: [],
  isPending: false,
  error: ''
}

export const retrieveRobots = (state=initialRobotsState, action={}) => {
  switch(action.type) {
    case RETRIEVE_ROBOTS_PENDING: 
      return {...state, isPending: true};
    case RETRIEVE_ROBOTS_SUCCESS: 
      return {...state, isPending: false, robots: action.payload};
    case RETRIEVE_ROBOTS_FAILED: 
      return {...state, error: action.payload, isPending: false};
    default :
      return state;
  }
}
