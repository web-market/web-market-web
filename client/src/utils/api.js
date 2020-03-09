const axios = require('axios');

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8081/',
	//baseURL: 'http://192.168.0.104:8081',
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

const DELETE = (url, data = {}) => {
	return axiosInstance.delete(url, { data: { ...data } });
};

export {
	GET,
	PUT,
	POST,
	DELETE
};
