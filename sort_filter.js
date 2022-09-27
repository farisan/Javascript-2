// HomeWork Javascript 2

// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, 
// mengurutkan hasil pencarian dan menampilkannya ke layar/console.

// Contoh: 
// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// Output: [8, 14, 17]

// SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// Output:
// “Nilai akhir harus lebih besar dari nilai awal”

// SeleksiNilai(4, 17 , [2, 25, 4])
// Output:
// “Jumlah angka dalam dataArray harus lebih dari 5”


// NOTED!!!
// 1. Validasi tipe data
// 2. Nilai awal < Nilai akhir
// 3. Panjang data array harus lebih dari 5 , jika kurang dari 5 maka salah
// 4. data array nya harus ngurutin dari yang terkecil sampai terbesar (sort())
// 5. data array harus n > nilai awal && n < nilai akhir (filter())



// ============================================================================ //


function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray) {
    //validasi tipe data harus number
    for (let i = 0; i <dataArray.length; i++){
        if (typeof dataArray[i] !== "number"){
            return "Input bukan number";
        }
    }
    //validasi nilai awal dan akhir
    if(typeof nilaiAwal !== "number"){
        return "Nilai awal bukan number";
    }if(typeof nilaiAkhir !== "number"){
        return "Nilai akhir bukan number";
    }

    //validasi nilai awal > nilai akhir & dataArray harus < 5
    if(nilaiAwal > nilaiAkhir){
        return "Nilai akhir harus lebih besar dari nilai awal";
    }else if(dataArray.length < 5){
        return "Nilai array harus lebih dari 5"
    }else{
        // console.log(dataArray);
        const hasil = dataArray.sort((a,b) => a - b );
        const hasil1 = hasil.filter(element => element > nilaiAwal && element < nilaiAkhir);
        return hasil1;
    }

}


console.log(seleksiNilai(2,20,[2,25,4,14,17,30,8]));
console.log(seleksiNilai(20,2,[2,25,4,14,17,30,8]));
console.log(seleksiNilai("string",20,[2,25,4,14,17,30,8]));
console.log(seleksiNilai(2,"string",[2,25,4,14,17,30,8]));
console.log(seleksiNilai(2,20,"[2,25,4,14,17,30,8]"));
console.log(seleksiNilai(2,20,["2","25","4","14","17",30,8]));
