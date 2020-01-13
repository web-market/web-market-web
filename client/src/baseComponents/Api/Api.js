const axios = require('axios');

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8081/',
});

const GET = (url) => {
	return axiosInstance.get(url);
};

const POST = (url, data) => {
	return axiosInstance.post(url, data);
};

export {
	GET,
	POST
};
