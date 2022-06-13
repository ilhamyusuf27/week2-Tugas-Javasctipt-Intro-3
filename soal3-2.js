const axios = require('axios');

const searchAnime = (title) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (typeof title === 'string') {
				const request = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${title}&page[limit]=1`);
				if (request?.data?.data?.length) {
					resolve(request.data.data);
				} else {
					reject(new Error('Data not found'));
				}
			} else {
				reject(new Error('Input must be a string'));
			}
		} catch (err) {
			reject(err);
		}
	});
};

searchAnime('bleach')
	.then((response) => {
		response.map((data) => {
			console.log(`Title: ${data.attributes.canonicalTitle}`);
			console.log(`Aired: ${data.attributes.startDate}`);
			console.log(`Episode: ${data.attributes.episodeCount}`);
			console.log(`Rating: ${data.attributes.averageRating}`);
			console.log(`Synopsis: ${data.attributes.synopsis}\n\n`);
			console.log('======================================================================================================================================\n\n');
		});
	})
	.catch((err) => {
		if (err?.response?.status === 404) {
			console.log('Invalid URL');
		} else {
			console.log(err.message);
		}
	});
