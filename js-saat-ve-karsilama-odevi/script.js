userName = prompt("Adınız nedir?")
document.querySelector('#myName').innerHTML = `${userName}`



function showTime() {
    var date = new Date().toLocaleString();
    document.getElementById("myClock").innerHTML = date;
    
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(showTime, 1000);

var days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
document.getElementById("myDay").innerHTML = days[new Date().getDay()];