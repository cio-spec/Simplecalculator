//function
//1. declaration
//2. expression

//1. declaration
/*
function name(parameter){
  code block;
}
*/ 
function sayHello(){
  return "Hello world";
}
console.log(sayHello());

function sapaNama(name){
  return "My Name is " + name;
}
console.log(sapaNama("Audrey"));
console.log(sapaNama("Tsaniya"));

//menghitung luas persegi panjang menggunakan function
//luas = panjang * lebar

function persegiPanjang(panjang, lebar){
  let luas = panjang * lebar;
  return "Luas persegi panjang adalah " + luas
}
console.log(persegiPanjang(4, 5));
console.log(persegiPanjang(100, 27));

//menghitung luas segitiga dengan menggunakan function
//luas = 1/2 * alas * tinggi
function segitiga(a, t){
  let luas = 1/2 * a * t
  return "Luas segitiga adalah " + luas
}
console.log(segitiga(10, 55));

//konversi suhu dari fahrenheit menjadi celcius menggunakan function
// C = (5/9) * (f-32);
function konversiSuhu(f){
  let rumus =  (5/9) * (f-32);
  return f + "°F = " + rumus + "°C"
}
console.log(konversiSuhu(50));
console.log(konversiSuhu(59));

//2. function expression
const hello = function(){
  return "hello world"
} 
console.log(hello);
console.log(hello());

//1. sapanama
//2. luas persegi panjang
//3. luas segitiga
//4. konversi suhu

//1.
const sapa = function(){
  return "My Name is Audrey";
}
console.log(sapa());

//2.
const persegiPanjang1 = function(panjang1, lebar1){
  let luas1 = panjang1 * lebar1;
  return "Luas persegi panjang adalah " + luas1;
}
console.log(persegiPanjang1(4, 5));

//3.
const segitiga1 = function(a1, t2){
  let luas2 = 1/2 * a1 * t2;
  return "Luas segitiga adalah " + luas2;
}
console.log(segitiga1(25, 20));

//4.
const konversiSuhu1 = function(f2){
  let rumus2 =  (5/9) * (f-32);
  return f + "°F = " + rumus2 + "°C";
}
console.log(konversiSuhu(59));

//Function Arrow;
const persegiPanjang2 = (panjang, lebar) =>
"Luas persegi panjang adalah " + panjang * lebar;
console.log(persegiPanjang2(5, 6));

//1. say helo
//2. sapa nama
//3. luas segitiga
//4. konversi suhu

//1.
const hallo = () => "Hello world";
console.log(hallo());

//2. 
const sapa1 = (nama) => "My Name is " + nama;
console.log(sapa1());

//3. 
const segitiga2 = (a3, t3) =>
"Luas segitiga adalah " + 1/2 * a3 * t3;
console.log(segitiga2(25, 25));

//4. 
const konversiSuhu3 = (f) =>  
"Luas segitiga adalah " + (5/9) * (f-32); 
f + "°F = "  + "°C";
console.log(konversiSuhu3(55));
