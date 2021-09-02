import axios from 'axios'

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getOrganizations(perPage, page) {
        return apiClient.get('/organizations?_limit=' + perPage + '&_page=' + page)
    },
    //Added new call
    getOrganization(id) {
        return apiClient.get('/organizations/' + id)
    },
    saveOrganization(organization) {
        return apiClient.post('/organizations', organization)
    }
}