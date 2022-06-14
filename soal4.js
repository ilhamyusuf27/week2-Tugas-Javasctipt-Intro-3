const axios = require('axios');

const getData = (url) => {
	return new Promise(async (resolve, reject) => {
		try {
			const request = await axios.get(url);
			if (request?.data?.length) {
				resolve(request.data);
			} else {
				reject(new Error('Cannot get data: data not found'));
			}
		} catch (error) {
			reject(error);
		}
	});
};

getData('https://jsonplaceholder.typicode.com/users')
	.then((response) => {
		console.log('==== Data Nama ====');
		response.map((data) => console.log(data.name));
	})
	.catch((err) => {
		const cekError = err?.response?.status === 404;
		if (cekError) {
			console.log('Invalid URL');
		} else {
			console.log(err.message);
		}
	});
