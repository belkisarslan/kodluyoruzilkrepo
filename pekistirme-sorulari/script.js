// Uygun dizi metotlarını kullanarak verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let dizi = [2,5,8,11,15,17];
function buyuk(dizi) 
{ 
    if(dizi > 10) 
       return true;
}
let newArr = dizi.filter(buyuk);
let result = newArr.map(function(sayi) {
    return sayi*5;
});

console.log(newArr);
console.log(result);



// Uygun dizi metodunu kullanarak aşağıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
let arrays = [2,3,4];
let results = arrays.reduce((sum, current) => sum * current);
console.log(results)




// Uygun dizi metotlarını kullanarak, dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "Beşten büyük eleman mevcut değil." yazdır.
//let array = [3,6,9,14,16];
let array =[1, 2, 3, 4]
function myFunction (array){
    if(array.some((element) => element > 5)){
        console.log("Beşten büyük bir eleman mevcut.")
    }else{
        console.log("Beşten büyük eleman mevcut değil.")
    }
}
myFunction(array);

//FOR DÖNGÜSÜ

//Ödev 1: 20 ile 40 arasındaki tüm sayıları konsola yazdırın.
console.log('20 ile 40 arasındaki tüm sayılar')
for(index=20; index<=40; index++){
    console.log(index)
}

//Ödev 2: 0 ve 50 sayıları arasından tek olanları console'a yazdıralım.
console.log('0 ile 50 arasındaki tek sayılar')
for(index=0; index<50; index++){
    if(index %2 == 1){
        console.log(index)
    }
}

//FOREACH

//Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.
const numbers = [12, 24, 36]; 
const newNumbers = [];

numbers.forEach((element) => {
    newNumbers.push(element + 2)
})
console.log(newNumbers)

//FİLTER
/*Bir dizimiz var ve bazı ögeleri filtrelemek istiyoruz. 
Mesela [elma, portakal, muz] sadece [elma] yı alarak orijinal diziyi değiştirmeden yeni bir dizi oluşturmamızı sağlar*/

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
];
//Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.

const bigAge = person.filter( person => person.age>30)
console.log(bigAge)

//Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const knowJs = person.filter(person => person.languages.includes("JavaScript"))
knowJs.forEach(myFunction)
function myFunction(item) {
    console.log(item.name);
}

//JavaScript.info'dan Çalışmalar

//Dizinin içinde tekrar eden elemanlardan sadece birini alarak diziyi döndürün.
let kullanicilar = ["Emine", "Muzaffer", "Fatma", "Kanako",
  "Kanako", "Muzaffer", "Fatma", "Kanako", ":-O"
];
function benzersiz(arr) {
  let sonuc = [];

  for (let str of arr) {
    if (!sonuc.includes(str)) {
      sonuc.push(str);
    }
  }

  return sonuc;
}
console.log(benzersiz(kullanicilar))

//Aşağıdaki kullanıcıları isim ve soyisim yazacak şekilde yeni bir dizi oluşturunuz.
let ahmet = { adi: "Ahmet", soyadi: "Doğtaş", yas: 25, id: 1 };
let mehmet = { adi: "Mehmet", soyadi: "İstikbal", yas: 30, id: 2 };
let muzaffer = { adi: "Muzaffer", soyadi: "Bellona", yas:28, id: 3 };

function yeni(){
    let kisiler = [ahmet, mehmet, muzaffer]
    let yeniKisiler = []
    let kisilerMapped = kisiler.map(kisi => ({
    adi_soyadi: `${kisi.adi} ${kisi.soyadi}`
  }));
  
  for(i=0; i<(kisiler.length); i++){
    yeniKisiler.push(kisilerMapped[i].adi_soyadi)
  }
  console.log(yeniKisiler)
}
yeni()

//kişilerin yaş ortalamalarını hesaplayan bir fonksiyon yazınız.
let kisiler = [ahmet, mehmet, muzaffer]
function ortalamaYasAl(users) {
    return users.reduce((onceki, kullanici) => onceki + kullanici.yas, 0) / users.length;
}
console.log(ortalamaYasAl(kisiler))

// 1. styles adında bir dizi oluşturun. İçerisinde “Jazz” ve “Blues” elemanları olsun.
// 2. “Rock-n-Roll” elemanını sona ekleyin.
// 3. Ortada bulunan elemanı “Classics” ile değiştirin. Yazacağınız kod tek elemanlı değerler için çalışmalı. 1-3-5-7 gibi
// 4. Dizinin ilk değerini sil ve göster.
// 5. Dizinin başlangıcına Rap ve Reggae gibi elemanlar ekleyiniz.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll")
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
let ilkDeger = styles.shift();
console.log(ilkDeger);
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles)

//sumInput() fonksiyonunu aşağıdaki şekilde yazınız:
//prompt ile kullanıcının değer girmesini sağlayın.
//Eğer kullanıcı boşluk karakteri girerse veya “İptal” tuşuna basar ise işlemi bitirin.
//Tüm girilen değerlerin toplamını hesaplayın.
//Not: 0 bir sayıdır, eğer giriş sıfır ise lütfen programı durdurmayın.
//*prompt sürekli çalışmasın diye cevabı yorum satırına aldım..
/*
function sumInput() {
 let sayilar = [];
  while (true) {
    let deger = prompt("Lütfen bir sayı giriniz?");
    // İptal edilmeli mi?
    if (deger === "" || deger === null || !isFinite(deger)) break;
  
    sayilar.push(+deger);
    }
  
    let toplam = 0;
    for (let sayi of sayilar) {
      toplam += sayi;10
    }
    return toplam;
}
console.log( sumInput() );
*/

//usAl(x,n) adında bir fonksiyon yazın. Bu fonksiyon x in n üssünü döndersin. Diğer bir deyişle x'i n kadar kendisiyle çarpsın.
//*prompt sürekli çalışmasın diye cevabı yorum satırına aldım..
/*
function usAl(x, n) {
  let sonuc = x;

  for (let i = 1; i < n; i++) {
    sonuc *= x;
  }

  return sonuc;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 1) {
  alert(` ${n} için üs alınamamaktadır. 0'dan büyük doğal sayı kullanınız.`);
} else {
  alert( usAl(x, n) );
}
*/

//Günlük 1111 şişe süt üreten bir tesisin 9 günlük kümülatif süt üretimini gün gün yazınız.
let uretim = 0;
for(i=0; i<=9; i++){
 for(j=1; j<=9; j++){
  uretim += 1111;
  console.log(j + ".gün " +uretim)
 }
 break;
}


//Yarıçapı 5 ve 6 olan iki dairenin alanları çarpımını hesaplayınız.
function daireAlan(r, pi=3.14){
 return pi*r*r;
}
function carp(a1, a2){
  return a1*a2;
}

let alan1 = daireAlan(5);
let alan2 = daireAlan(6);
let hesaplanan = carp(alan1, alan2);
console.log("dairelerin alanları toplamı " + hesaplanan);

//[1,2,3,4,5] arrayini parametre alan bir arrow fonksiyonumuz olsun. Bu arrayin sonucu bize yeni bir array döndürsün. Oluşan yeni arraydaki çift sayılar 2,  tek sayılar ise 3 ile çarpılmış olsun.
/*MAP Biz dizimiz var ve her bir ögesi işlenerek dönüştürülüyor. Sonuç olarak orijinali değiştirmeden aynı uzunlukta yeni bir dizi elde ederiz. 
Mesela [elma, portakal, karpuz] yeni dizi[dilim elma, dilim portakal, dilim karpuz]*/
const newArray = (nums) => {
  const newNums = nums.map(e=>{      
    if(e%2==0){
      return e*2
    }else if(e%2==1){
      return e*3
    }
  });

 return newNums 
}
console.log(newArray([1,2,3,4,5]))

//Aşağıdaki dizideki tüm pozitif sayıların toplamını bulunuz.
/*REDUCE dizimizin elemanlarından her ögeyi döngü hesaplatarak yeni bir dizi elde ediyoruz.Yeni dizinin tek bir değer elemanı vardır ve orijinal dizi değişmez. 
Mesela [elma, portakal, karpuz] yeni dizi [elma, portakal ve karpuz dilimlerinden oluşan bir meyve tabağı]*/
let yeniDizi = [1, -2, -3, 4, 5, -6];
let sonuc = yeniDizi.reduce(function(sum, e){
  if(e >= 0){
    return sum + e;
  }else{
    return sum;
  }
})
console.log(sonuc)

//abc değişkeninde tanımlanmış ifadedeki büyük ve küçük harflerle yazılmış olan "heyecan" kelimesini "mutluluk" kelimesi ile değiştiriniz.
let abc = "JavaScript heyecan verici bir dildir.Öğrendikçe daha çok HEYECAN vermeye başlar. Heyecanlarınız bol olsun"
//i büyük küçük harf duyarlılığını kaldırıyor g global olarak değişim sağlıyor.
let abcYeni = abc.replace(/heyecan/ig, "mutluluk")
console.log(abcYeni)
console.log(abc)

//Faktöriyel alma fonksiyonu
function faktor(sayi){
  let sonuc = 1;
  for(let i=1; i<=sayi; i++){
   sonuc *= i
  }
  return sonuc
}
console.log("faktöriyel değeri => " + faktor(4))

//Dizinin içindeki tekrar etmeyen elemanları bulun.
//JavaScripte aşık olabilirim <3 :D
function lonelyinteger(a){
  let sonuc = a.filter(function(num){
    return a.indexOf(num) === a.lastIndexOf(num)
  })
  let lonel = sonuc.map(function(){
    return sonuc[i++]
  })
  return lonel
}
console.log(lonelyinteger([1,2,1,3,3,4,5,4,7]))

//Aşağıdaki paragrafta birden fazla geçen kelimeleri bulunuz
let prg = "Bugün hava çok güzel. Bu güzel günde hep beraber javascript çalışalım. Çalışalım ki her şey daha da güzel olsun."
let sub = "güzel"
let count = 0;
let xindex = prg.indexOf(sub)
while(xindex !== -1){
  count ++;
  xindex = prg.indexOf(sub, xindex +1);
}
console.log(count)

//Sınıflandırma ile bir dikdörtgen tanımlayın ve bu dikdörtgenin alanın hesaplayın. 
//Daha sonra extends ve super anahtar kelimelerini kullanarak dikdörtgen sınıfındaki işlemleri kare sınıfına uygulamaya çalışın.

class Rectangle {
  constructor(w, h) {
      this.w = w;
      this.h = h;
  }
}
Rectangle.prototype.area = function(){
    return (this.w * this.h);
}
class Square extends Rectangle{
  constructor(s){
   super(s, s)    
  }
}
let areaR = new Rectangle(3, 4)
let areaS = new Square(3);
console.log("dikdörtgenin alanı: ",areaR.area())
console.log("karenin alanı: ",areaS.area())

//Girilen bir tarihin hangi güne geldiğini hesaplamaya çalışalım.
function getDayName(dateString) {
  let dayName;
  let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let date = new Date(dateString)
  dayName = days[date.getDay()]
  return dayName;
}
//Bugünün tarihini atıp deneyelim.
console.log(getDayName('2022/06/02'))

//Düzenli ifadeler kullanarak girilen kelimenin aynı harfle başlayıp aynı harfle bitmesi durumunda true, 
//farklı harfle bitmesi durumunda false döndüren formülü yazınız.
//'^' başlangıçla eşleştir
//'\1' ilk yakalama grubuna referans
//'$' konu sonuyla eşleşme
function regexVar() {
  let re = /^([aeiou]).+\1$/;
  return re;
}
re = regexVar();
console.log("araba kelimesi " + re.test('araba'))
console.log("bisiklet kelimesi " + re.test('bisiklet'))

//Düzenli ifadeler kullanarak Mr. Mrs. Ms. Dr. Er. unvanlarından sonra nokta ve isim gelmesinin kontrolünü yapınız.
//'|' veya demek
function regexLet() {
  let reg = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
  return reg;
}
reg = regexLet();
console.log("Dr.Ahmet "+reg.test('Dr.Ahmet'))
console.log("Dr#Ahmet "+reg.test('Dr#Ahmet'))
//Formül arasında boşluk bıraktığımızda bu işlem true oluyor.
console.log("Dr .Ahmet "+reg.test('Dr .Ahmet'))

//Çevresi ve alanı verilen dikdörtgenin uzun ve kısa kenar uzunluklarını bulan bir fonksiyon yazınız.
function sides(a, p) {
  const root = Math.sqrt((p**2 - (16*a)))
  return [((p - root)/4), ((p + root)/4)]
}
console.log(sides(15, 16))