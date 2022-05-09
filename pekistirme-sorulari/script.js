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
//***burada bir sorun var çözeceğim
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
    yeniKisiler.push(kisilerMapped.adi_soyadi)
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