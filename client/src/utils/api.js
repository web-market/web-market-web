const axios = require('axios');

const axiosInstance = axios.create({
	baseURL: 'http://192.168.1.102:8081/',
});

const GET = (url) => {
	return axiosInstance.get(url);
};

const POST = (url, data) => {
	return axiosInstance.post(url, data);
};

const PUT = (url, data) => {
	return axiosInstance.put(url, data);
};

const DELETE = (url) => {
	return axiosInstance.delete(url);
};

export {
	GET,
	POST,
	DELETE,
	PUT
};
