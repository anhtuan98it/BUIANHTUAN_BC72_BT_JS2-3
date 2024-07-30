// Bài 1
/*
*input : Số Tiền Lương 1 ngày : 100 000

*Các bước xử lý :
-tạo biến "luongNgay" "songaylam" "tongLuong"
-gán giá trị cho "luongNgay"                                      100000
-Lấy giá trị cho songaylam từ người dùng nhập vào (thẻ input)
-Sử dụng công thức: tongLuong = luongNgay * songaylam
-in ra kết quả console

*output : Xuất ra màn hình tổng tiền lương nhận được

*/

var luongNgay = 100000;

var songaylam = 0;

var tongLuong = 0;

function ketquab1() {
  var songaylam = document.getElementById("songaylam").value;

  var tongLuong = luongNgay * songaylam;
  console.log("Tổng tiền lương nhận được là :", tongLuong);

  document.getElementById("resultb1").textContent =
    "Tổng số tiền lương nhận được là: " + tongLuong;
}

/**
 * Bài 2: Tính giá trị trung bình
 * input : cho 5 số thực bất kì nhập vào từ người dùng

*các bước xử lý:
-tạo biến "num1" "num2" "num3" "num4" "num5" "numTb"
-gán giá trị cho "num1" "num2" "num3" "num4" "num5" từ dữ liệu nhập vào, sử dụng hàm parseFloat để ép KDL sang số thực
-sử dụng công thức : "numTb" = ("num1" + "num2" + "num3" + "num4" + "num5") / 5
-in ra kết quả console

*output : Xuất ra màn hình giá trị trung bình
 */

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var numTb = 0;

function ketquab2() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);
  var num4 = parseFloat(document.getElementById("num4").value);
  var num5 = parseFloat(document.getElementById("num5").value);

  var numTb = (num1 + num2 + num3 + num4 + num5) / 5;
  console.log("Giá trị trung bình là :", numTb);

  document.getElementById("resultb2").textContent =
    "Giá trị trung bình là: " + numTb.toFixed(2);
}

/**
 * Bài 3: Quy đổi tiền
 * input: giá 1 USD là 23500

*Các bước thực hiện
-tạo biến "sotienUSD" và "sotienVND"
-gán giá trị cho "sotienUSD" từ dữ liệu người dùng nhập vào
-tính theo công thức sotienVND = sotienUSD * 23500
-in ra kết quả console

*output: Xuất ra màn hình số tiền sau khi quy đổi
 */

var sotienUSD = 0;
var sotienVND = 0;

function ketquab3() {
  var sotienUSD = document.getElementById("sotienUSD").value;
  var sotienVND = sotienUSD * 23500;
  console.log("Số tiền sau khi quy đổi là: ", sotienVND);

  document.getElementById("resultb3").textContent =
    "Số tiền sau khi quy đổi là: " + sotienVND;
}

// Bài 4
/*
*input: Cho chièu dài và chiều rộng của hình chữ nhật

*Xử lý:
-tạo biến "dientich" "chuvi" "chieudai" "chieurong"
-lấy giá trị "chieudai" và "chieurong" do người dùng nhập vào
-tính diện tích và chu vi theo công thức 
+ diện tích: chieudai * chieurong
+ chu vi: (chieudai + chieurong) * 2
-in ra kết quả console

*output: Xuất ra màn hình diện tích và chu vi HCN

*/

var dientich = 0;
var chuvi = 0;
var chieudai = 0;
var chieurong = 0;

function ketquab4() {
  chieudai = parseFloat(document.getElementById("chieudai").value);

  chieurong = parseFloat(document.getElementById("chieurong").value);

  dientich = chieudai * chieurong;
  console.log("Diện tích hình chữ nhật là: ", dientich);

  chuvi = (chieudai + chieurong) * 2;
  console.log("Chu vi hình chữ nhật là: ", chuvi);

  document.getElementById("resultb41").textContent =
    "Diện tích của hình chữ nhật là: " + dientich;
  document.getElementById("resultb42").textContent =
    "Chu vi của hình chữ nhật là: " + chuvi;
}

/**
 * Bài 5:
 * input: số có 2 chữ số
 * xử lý:
 * - lấy giá trị từ input
 * - chuyển thành số nguyên
 * - Tính tổng các chữ số theo ct sau:
 * + so hàng chục: so/10
 * + so hàng đơn vị: so % 10
 * output: xuất ra màn hình tổng của 2 ký số
 */

function calculateSum() {
    // Lấy giá trị từ input
    const numberInput = document.getElementById('numberInput').value;

    // Chuyển giá trị thành số nguyên
    const number = parseInt(numberInput, 10);

    // Tính tổng các chữ số
    const tens = Math.floor(number / 10); // Lấy chữ số hàng chục
    const units = number % 10;            // Lấy chữ số hàng đơn vị
    const sum = tens + units;

    // Hiển thị kết quả
    document.getElementById("resultb5").textContent = `Tổng của hai ký số là: ${sum}`;
}