const hariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				if (typeof day === 'string') {
					const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
					let cek = dataDay.find((item) => {
						return item === day.toLowerCase();
					});
					if (cek) {
						resolve(cek);
					} else {
						reject(new Error('Hari ini bukan hari kerja'));
					}
				} else {
					reject(new Error('Input must be a string'));
				}
			} catch {
				reject(new Error('Error on your code!'));
			}
			/*
			Try menampung kode program, apabila terjadi error di try maka error tersebut akan ditangkap catch yang berisi reject error
			*/
		}, 3000);
	});
};

hariKerja('Senin')
	.then((response) => console.log(`Hari ini hari ${response}, kamu harus bekerja`))
	.catch((err) => console.log(err.message));
/* 
	then untuk menangkap hasil yang dikirimkan oleh resolve
	catch untuk menangkap hasil yang dikirimkan oleh reject
	*/