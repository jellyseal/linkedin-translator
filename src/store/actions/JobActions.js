import linkedinScrapper from '../../scrapper/linkedin';

/*
 * action types
 */
export const SET_JOB = 'Set job url';
export const CLEAR_JOB = 'Clear job';

/*
 * action creators
 */

export const setJob = (url) => async (dispatch) => {
    try {
      const response = await linkedinScrapper(url);
      dispatch({
        type: SET_JOB,
        payload: response.data,
      });
    } catch (error) {
      return error;
    }
  };
export function clearJob(payload) {
  return {
    type: CLEAR_JOB,
    payload,
  };
}
