import { SET_LOADING } from './reducer';

export default function setLoading(status) {
  return {
    type: SET_LOADING,
    payload: status,
  };
}

