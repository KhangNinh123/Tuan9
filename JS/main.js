// Lấy các phần tử HTML cần sử dụng
const modal = document.getElementById("myModal");
const btn = document.querySelector("button");
const span = document.getElementsByClassName("close")[0];
const table = document.querySelector("table tbody");
let stt = 0;

// Hàm mở modal
function openModal() {
    modal.style.display = "block";
}

// Hàm đóng modal
function closeModal() {
    modal.style.display = "none";
}

// Khi người dùng nhấn nút X để đóng modal
span.onclick = function () {
    closeModal();
}

// Khi người dùng nhấn bất kỳ đâu ngoài modal để đóng nó
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}
const result = 1;
// kiểm tra mã bệnh nhân
function checkIDPatient() {
    const str = document.getElementById("maBenhNhan").value;
    const regex = /^BN-\d{5}$/;

    if (regex.test(str) == true) {
        // return 1;
    }
    else {
        alert("Mã bệnh nhân có dạng: BN-XXXXX (X là các chữ số bất kỳ)");
        // return 0;
        result = 0;
    }
}

// kiểm tra Password
function checkPass() {
    const str = document.getElementById("matKhau").value;
    const regex = /^\w{6,}$/;

    if (regex.test(str) == true) {
        // return 1;
    }
    else {
        alert("Password phải từ 6 ký tự bất kỳ (Không bao gồm ký tự đặc biệt)");
        // return 0;
        result = 0;
    }
}

// kiểm tra ngày khám
function checkTime() {
    var today = new Date(); // lấy ngày hiện tại
    var ngayKham = new Date(document.getElementById("ngayKham").value);

    if (ngayKham.getTime() > today.getTime()) {
        // return 1;

    } else {
        alert("Ngày khám phải sau ngày hiện tại !");
        // return 0;
        result = 0;
    }
    return result;
}
// Hàm thêm thông tin bệnh nhân mới vào bảng
function addPatient() {
    let isValid = true; // Tạo biến isValid để lưu trữ kết quả kiểm tra

    // Kiểm tra các định dạng đầu vào
    checkIDPatient();
    checkPass();
    isValid = checkTime() && isValid; // Cập nhật isValid với kết quả của hàm kiểm tra checkTime()

    // Kiểm tra isValid trước khi thêm thông tin bệnh nhân mới vào bảng
    if (!isValid) {
        alert("Hãy kiểm tra lại các định dạng nhập !");
    }
    else {
        // Lấy thông tin từ modal
        const maBenhNhan = document.getElementById("maBenhNhan").value;
        const matKhau = document.getElementById("matKhau").value;
        const ngayKham = document.getElementById("ngayKham").value;
        const phuThu1 = document.getElementById("phuThu1").checked;
        const phuThu2 = document.getElementById("phuThu2").checked;
        const phuThu3 = document.getElementById("phuThu3").checked;
        const chuyenKhoa = document.getElementById("chuyenKhoa").value;

        // Tính tổng phụ thu dịch vụ
        let phuThu = 0;
        if (phuThu1) phuThu += 50000;
        if (phuThu2) phuThu += 100000;
        if (phuThu3) phuThu += 150000;

        // Tạo một hàng mới
        const newRow = table.insertRow();
        const sttCell = newRow.insertCell();
        const maBenhNhanCell = newRow.insertCell();
        const matKhauCell = newRow.insertCell();
        const ngayKhamCell = newRow.insertCell();
        const phuThuCell = newRow.insertCell();
        const chuyenKhoaCell = newRow.insertCell();

        // Cập nhật giá trị cho các ô trong hàng mới
        sttCell.innerHTML = stt++;
        maBenhNhanCell.innerHTML = maBenhNhan;
        matKhauCell.innerHTML = matKhau;
        ngayKhamCell.innerHTML = ngayKham;
        phuThuCell.innerHTML = phuThu.toLocaleString() + "đ";
        chuyenKhoaCell.innerHTML = chuyenKhoa;

        // Đóng modal
        closeModal();

        // Reset các giá trị trong modal
        document.getElementById("maBenhNhan").value = "";
        document.getElementById("matKhau").value = "";
        document.getElementById("ngayKham").value = "";
        document.getElementById("phuThu1").checked = false;
        document.getElementById("phuThu2").checked = false;
        document.getElementById("phuThu3").checked = false;
        document.getElementById("chuyenKhoa").value = "Chuyên Khoa Ngoại";
    }
}