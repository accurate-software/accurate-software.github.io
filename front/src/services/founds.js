import { http } from './api'

export default {

  list: () => {
    return http.get('/founds');
  },

  listById: (_id) => {
    return http.get(`/founds/${_id}`);
  }
}