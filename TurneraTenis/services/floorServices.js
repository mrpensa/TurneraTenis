import axiosClient from "./axiosClient.js";
const apiClient = axiosClient.getApiClient();

export default {
  getAll() {
    return apiClient.get('/floor');
  },
  setFloor(floor) {
    return apiClient.post('/floor', floor);
  },
  update(floor) {
    // chequear
    return apiClient.put('/floor', floor);
  },
};
