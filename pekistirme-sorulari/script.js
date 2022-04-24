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

