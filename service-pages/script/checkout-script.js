 // JavaScript
        // Validasi dan navigasi antarhalaman
        let currentPage = 1;
        const formPages = document.querySelectorAll('.form-page');
        const orderDetails = document.getElementById('orderDetails');
        const countdownElement = document.getElementById('countdown');

        function showFirstForm() {
            document.querySelector('.info-section').style.display = 'none';
            document.getElementById('formPage1').classList.add('active');
        }

        function validatePage1() {
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const telepon = document.getElementById('telepon').value;

            if (nama && email && telepon) {
                changePage(2);
            } else {
                alert('Mohon isi semua informasi.');
            }
        }

        function validatePage2() {
            const deskripsiProyek = document.getElementById('deskripsiProyek').value;

            if (deskripsiProyek) {
                changePage(3);
            } else {
                alert('Mohon isi semua informasi.');
            }
        }

        function changePage(pageNumber) {
            formPages[currentPage - 1].classList.remove('active');
            formPages[pageNumber - 1].classList.add('active');
            currentPage = pageNumber;

            if (pageNumber === 3) {
                const formPage3 = document.getElementById('formPage3');
                formPage3.addEventListener('submit', function(event) {
                    event.preventDefault(); // Menghentikan pengiriman form

                    // Lakukan validasi lain jika diperlukan sebelum menampilkan informasi pesanan
                    const nomorKartu = document.getElementById('nomorKartu').value;
                    const pemilikKartu = document.getElementById('pemilikKartu').value;
                    const tanggalKadaluarsa = document.getElementById('tanggalKadaluarsa').value;
                    const cvv = document.getElementById('cvv').value;

                    if (nomorKartu && pemilikKartu && tanggalKadaluarsa && cvv) {
                        orderDetails.classList.add('active');

                        // Menyembunyikan form setelah submit pada halaman 3
                        const formContainer = document.querySelector('.form-container');
                        formContainer.style.display = 'none';

                        // Tampilkan peringatan dan hitung mundur sebelum menyembunyikan wrapper
                        let seconds = 10;
                        countdownElement.innerText = `Halaman ini akan ditutup dalam ${seconds} detik`;

                        const countdownInterval = setInterval(function() {
                            seconds--;
                            countdownElement.innerText = `Halaman ini akan ditutup dalam ${seconds} detik`;

                            if (seconds <= 0) {
                                clearInterval(countdownInterval);
                                document.querySelector('.payment-modal').style.display = 'none';
                                document.body.style.overflow = 'auto';
                            }
                        }, 1000);
                    } else {
                        alert('Mohon isi semua informasi pembayaran.');
                    }
                });
            }
        }