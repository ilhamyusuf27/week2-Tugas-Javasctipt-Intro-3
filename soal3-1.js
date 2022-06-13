const axios = require('axios');

const showNews = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const request = await axios.get(`
				https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3e1de0771dbf4f9cada3fe4ae7d48752`);
			if (request?.data?.articles?.length) {
				resolve(request.data);
			} else {
				reject(new Error('Data not found'));
			}
		} catch (err) {
			reject(err);
		}
	});
};

showNews()
	.then((res) => {
		res.articles.map((element) => {
			console.log(`Title: ${element.title}`);
			console.log(`Author: ${element.author}`);
			console.log(`Date Publish: ${element.publishedAt}`);
			console.log(`Content: \n${element.content}\n\n`);
			console.log(`================================================================================================\n\n`);
		});
	})
	.catch((err) => {
		if (err?.response?.status === 401) {
			console.log('Your API key is invalid or incorrect');
		} else if (err?.response?.status === 404) {
			console.log('Invalid URL');
		} else {
			console.log(err.message);
		}
	});
