function tampilkanData() {
    let tableBody = document.getElementById("dataTable");
    tableBody.innerHTML = "";

    data.map((item, index) => {
        let row = `<tr class="fade-in">
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.umur}</td>
            <td>${item.alamat}</td>
            <td>${item.email}</td>
            <td>
                <button class="btn btn-danger btn-sm btn-hover" onclick="hapusData(${index})">Hapus</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function tambahData() {
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let alamat = document.getElementById("alamat").value;
    let email = document.getElementById("email").value;

    if (nama && umur && alamat && email) {
        data.push({ nama, umur: parseInt(umur), alamat, email });
        tampilkanData();
        document.getElementById("formData").reset();
    } else {
        alert("Semua field harus diisi!");
    }
}

function hapusData(index) {
    data.splice(index, 1);
    tampilkanData();
}

// Panggil fungsi pertama kali
document.addEventListener("DOMContentLoaded", tampilkanData);
