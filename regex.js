/*jshint esversion: 6 */
// #### by:Naufal Ghifari; 20200829 ####
// #### Soal ####
// 1.Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf
// besar atau tidak.
// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

// #### Jawaban ####
hiLoGex = () => {
  let input1 = prompt("your input: ");
  let lowGex = /^[a-z]/;
  let hiGex = /^[A-Z]/;
  let loResult = lowGex.test(input1);
  let hiResult = hiGex.test(input1);
  if (loResult == true) {
    alert("your word is " + input1 + " and the first character is lower case");
  } else if (hiResult == true) {
    alert("your word is " + input1 + " and the first character is upper case");
  }
};

// #### Soal ####
// 2.Buat sebuah program untuk memvalidasi format nomor handphone
// Nomor handphone minimum 10 digit dan maksimum 12 digit
// Hanya menerima digit nomer

// #### Jawaban ####
phoneNumb = () => {
  let input2 = prompt("Your phone, please? :) ");
  let phoneGex = /^\d{10,12}$/;
  let phoneResult = phoneGex.test(input2);
  if (phoneResult == true) {
    alert("your number is " + input2);
  } else {
    alert("number invalid, must be number, >10 and <12 characters ");
    phoneNumb();
  }
};

// #### Soal ####
// 3.Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis
// sama.
// Bagaimana cara memulai usaha bisnis
// Bootcamp impact byte
// Status covid hari ini

// #### Jawaban ####
searchRegex = () => {
    let input3 = prompt("search");
    let searchGex = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
    let searchResult = searchGex.test(input3);
    if (searchResult == true) {
        alert("you searched for " + input3);
    } else {
        alert("invalid search");
        searchRegex();
    }
};