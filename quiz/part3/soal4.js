
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("\n Looping Pertama Kelipatan 3 dengan pertambahan 2 ");
for(let i = 1; i <= 100; i++) { // Looping pertama
    if ( i % 3 == 0 ) {
        console.log(i + 2);
    }
}

console.log("\n Looping Kedua Kelipatan 6 dengan pertambahan 5 ");
for(let j = 1; j <= 100; j++) {
    if (j % 6 == 0) {
        console.log(j + 5);
    }
}

console.log("\n Looping Ketiga Kelipatan 10 dengan pertambahan 3 kelipatan 3 atau 9) ");
for(let k = 1; k <= 100; k++) {
    if(k % 10 == 0){
        console.log(k + 3 * 3);
    }
}