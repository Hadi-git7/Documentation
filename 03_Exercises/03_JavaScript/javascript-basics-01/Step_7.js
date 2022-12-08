function total() {
var num1 = document.getElementById('shoe_size').value;
var num2 = document.getElementById('year').value;
document.getElementById("result").innerHTML = (((num1 * 2 + 5 )* 50) - num2)+1766;
}