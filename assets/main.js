var userDistance;
var price;
var fullPrice;

var userAge;
var userDiscount;

price = 0.21;
userDistance = prompt(' inserire la lunghezza del tragitto in km :');
userAge = prompt(' inserire la votra età : ');

fullPrice = userDistance * price;

document.getElementById('fullprice').innerHTML = fullPrice;

// calcolo delle percentuali di sconto

if (userAge<18) {
    userDiscount = fullPrice * 0.80;
    document.getElementById('discountedprice').innerHTML = userDiscount;

}
