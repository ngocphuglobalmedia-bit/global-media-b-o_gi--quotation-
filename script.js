function calculateTotal(){

let total = 0;

if(document.getElementById("photo-half").checked)
total += 2500000;

if(document.getElementById("photo-day").checked)
total += 4000000;

if(document.getElementById("video-half").checked)
total += 3500000;

if(document.getElementById("video-day").checked)
total += 6000000;

if(document.getElementById("flycam-half").checked)
total += 1500000;

if(document.getElementById("flycam-day").checked)
total += 2500000;

let recap =
parseInt(
document.getElementById("recap").value
) || 0;

total += recap * 2000000;

let subtotal = total;

let vat = 0;

if(document.getElementById("vat").checked){

    vat = subtotal * 0.08;

}

let grandTotal = subtotal + vat;

document.getElementById("subtotal").innerText =
subtotal.toLocaleString('vi-VN') + " VNĐ";

document.getElementById("vatAmount").innerText =
vat.toLocaleString('vi-VN') + " VNĐ";

document.getElementById("total").innerText =
grandTotal.toLocaleString('vi-VN') + " VNĐ";
}

document.addEventListener(
"change",
calculateTotal
);

calculateTotal();

document
.getElementById("submitBtn")
.addEventListener("click", sendLead);

function sendLead(){

const data = {

name:
document.getElementById("name").value,

company:
document.getElementById("company").value,

phone:
document.getElementById("phone").value,

email:
document.getElementById("email").value,

total:
document.getElementById("total").innerText

};

fetch(
"https://script.google.com/macros/s/AKfycbwHaRNDUez5vEICqYP5MxFOtqwNyfNM6qBL5zQj8a6XQyY1io-hMN5qRIKeD3nnrK9e/exec",
{

method:"POST",

body:JSON.stringify(data)

}

)

.then(()=>{

alert(
"Yêu cầu tư vấn đã được gửi thành công!"
);

});

}

document
.getElementById("pdfBtn")
.addEventListener("click", generatePDF);

function generatePDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

const name =
document.getElementById("name").value || "";

const company =
document.getElementById("company").value || "";

const phone =
document.getElementById("phone").value || "";

const email =
document.getElementById("email").value || "";

const subtotal =
document.getElementById("subtotal").innerText;

const vat =
document.getElementById("vatAmount").innerText;

const total =
document.getElementById("total").innerText;

doc.setFontSize(18);

doc.text(
"GLOBAL MEDIA & EVENTS",
20,
20
);

doc.setFontSize(14);

doc.text(
"BAO GIA MEDIA SU KIEN",
20,
35
);

doc.setFontSize(11);

doc.text(
"Khach hang: " + name,
20,
55
);

doc.text(
"Cong ty: " + company,
20,
65
);

doc.text(
"So dien thoai: " + phone,
20,
75
);

doc.text(
"Email: " + email,
20,
85
);

doc.line(
20,
95,
190,
95
);

doc.text(
"Tam tinh: " + subtotal,
20,
110
);

doc.text(
"VAT 8%: " + vat,
20,
120
);

doc.text(
"TONG CONG: " + total,
20,
135
);

doc.line(
20,
145,
190,
145
);

doc.text(
"Hotline: 0334 412 884",
20,
160
);

doc.text(
"Email: ngocphu.globalmedia@gmail.com",
20,
170
);

doc.save(
"BaoGia-GlobalMedia.pdf"
);

}
