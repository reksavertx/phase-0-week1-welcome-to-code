
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("Looping Pertama".toUpperCase());
let i = 0;
while (true) {
    console.log("Looping Maju");

    if (i == 10) {
        console.log("Looping Maju Done");
        break;
    }
    i++
}

console.log("\nLooping Kedua".toUpperCase()); // ---. nyoba2 upper and lowercase hehehehe
let w = 10 
while (true) {
    console.log("Wuih Loopingan nya mundur cuy");

    if (i == 0) {
        console.log("Duh lopingan muundur udah selesai");
        break;
    }
    i--
}