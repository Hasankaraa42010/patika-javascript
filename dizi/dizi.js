//Dizi oluşturma
let dizi=[1,2,3]
//elemanlara erişim
console.log(dizi[0])
//dizileri yazdırma

for(let i=0;i<dizi.length;i++){
    console.log(dizi[i])
}
//diziye eleman ekleme çıkarma

//eleman ekleme

//sonuna ekleme

dizi.push("4")

//başına ekleme
dizi.unshift(`0`)

//indexe gore ekleme
dizi.splice(1,0,-1)

//elemean silme

//başından silme
dizi.shift();
//sonundan silme
dizi.pop();
//indexe göre silme
dizi.splice(1,1)

//elemanın olup olmadığını kontrol etme
const ikivar=dizi.includes(2);
console.log(ikivar)

//dizi kopyası oluşturma

const fakeDizi=dizi.slice(0,dizi.length)
console.log(fakeDizi)
console.log(dizi)
//diziyi string bir değere atamak

let stringHali=dizi.join();
console.log(stringHali)
let stringAralikliHali=dizi.join(" ");
console.log(stringAralikliHali)

//dizileri birleştirme 

let harfDizi=["bir","iki","uc"]
let birlesikDizi=dizi.concat(harfDizi);
console.log(birlesikDizi)

//dizilerde fonsiyonşlar
dizi.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzemeIndeksi,malzeme);
});

//dizi içerisinde işlem yapıp başka diziye atma

let oynanmisDizi=dizi.map(function(eleman){
    if(eleman>0){
        return eleman*5;
    }
    else {
        return eleman*-5;
    }
    
})
console.log(oynanmisDizi)

//dizideki istediğimiz ozelliklerle yeni bir dizi oluşturma
const filtreDizi=dizi.filter(function(eleman){
    return eleman>1;
})
console.log(filtreDizi)

//find bulma
//sort sıralama

//pekiştirme soruları

//Uygun dizi metotlarını kullanarak  yukarıda verilen        dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun
let ornek = [2,5,8,11,15,17];

let uygunDizi=ornek.filter(function(eleman){
    return eleman>10 
    
})
let sonDizi=uygunDizi.map(function(eleman){
    return eleman*5
})
console.log(sonDizi)
// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.
let dizi2 = [3,6,9,14,16];
//birinci yol
function myFunction(dizi){
    let kontrol=false;
    for (let index = 0; index < dizi.length; index++) {
        if(dizi[index]>5){
            kontrol=true;
        }
        
    }
    if(kontrol==true){
        console.log("5ten buyuk eleman vardır")
    }
    else{
        console.log("5ten buyuk eleman yoktur")
    }
}
//ikinci yol
function myFunction2(dizi){
    const kontrolDizi=dizi.filter(function(eleman){
        return eleman>5
    })
    if(kontrolDizi.length>0){
        console.log("5ten buyuk eleman vardır")
    }
    else{
        console.log("5ten buyuk eleman yoktur")
    }
    
}
myFunction(dizi2);
myFunction2(dizi2);

let dizi3 = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
function carpım(toplam,eleman){
    return toplam*eleman;
}
const sonuc= dizi3.reduce(carpım,1);
   console.log(sonuc)

 
