const getMonth = (callback) => {
	setTimeout(() => {
		let error = false;
		let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
		if (!error) {
			callback(null, month);
		} else {
			callback(new Error('Sorry Data Not Found'), []);
		}
	}, 4000);
};

const printData = (error, data) => {
	if (error === null) {
		data.map((element, indeks) => console.log(`Bulan ke-${indeks + 1} ${element}`));
	} else {
		console.log(error.message);
	}
};

getMonth(printData);
