import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();

export default {
    login(user) {
        return apiClient.post('/users/login', user);
    },
    register(user){
        return apiClient.post('/users/register', user);
    },
    getAll(){
        return apiClient.get('/users', lista)
    }

}