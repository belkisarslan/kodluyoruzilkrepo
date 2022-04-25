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

const knowJs = person.filter(lang => lang.languages === "JavaScript")
console.log(knowJs)

