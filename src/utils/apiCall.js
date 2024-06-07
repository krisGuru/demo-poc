import axios from 'axios'
const baseURL = 'http://localhost:8000/'

const apiCall = (endPoint, reqMethod, data, isFormData) => {
    return axios({
        method: reqMethod,
        url: baseURL+endPoint,
        data: data,
        headers: {'Content-Type': 
            isFormData ? 'multipart/form-data' : 'application/json'}
    })
}

export default apiCall
