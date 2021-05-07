import {
  FETCH_INTERVIEW_CANDIDATES_REQUEST,
  FETCH_INTERVIEW_CANDIDATES_SUCCESS,
  FETCH_INTERVIEW_CANDIDATES_ERROR
} from '../types/interview'

function getAllInterviewsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_INTERVIEW_CANDIDATES_REQUEST:
      return {
        isLoading: true,
      }
    case FETCH_INTERVIEW_CANDIDATES_SUCCESS:
      return {
        isLoading: false,
        data: action.payload.data,
      }
    case FETCH_INTERVIEW_CANDIDATES_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export {
  getAllInterviewsReducer
}
