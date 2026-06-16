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
