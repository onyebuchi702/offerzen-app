import {
  FETCH_INTERVIEW_CANDIDATES_REQUEST,
  FETCH_INTERVIEW_CANDIDATES_SUCCESS,
  FETCH_INTERVIEW_CANDIDATES_ERROR
} from '../types/interview'
import axios from "axios";

const fetchAllCandidates = () => async dispatch => {
  dispatch({ type: FETCH_INTERVIEW_CANDIDATES_REQUEST })

  try {
    const API_URL = `${process.env.REACT_APP_BASE_URL}interviews/get`
    const data = await axios.get(API_URL);

    dispatch({ type: FETCH_INTERVIEW_CANDIDATES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_INTERVIEW_CANDIDATES_ERROR, payload: error });
  }
}

export {
  fetchAllCandidates
}
