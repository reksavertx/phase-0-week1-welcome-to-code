
// Problem buatlah bintang seperti berikut
let input = 5;
// input = 100; //---> nyoba apa yang terjadi jika bintangnya seratus baris hehehe
let pattern_bintang = ""
for ( let i = 1; i <= input; i++) {
    for(let q = 1; q <= i; q++) {
        pattern_bintang += "*";
    }
    pattern_bintang += "\n";
}
console.log(pattern_bintang);
//hasilnya
//*
//**
//***
//****
//*****