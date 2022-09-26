
// function seleksiNilai(nilaiAwal, nilaiAkhir, ...dataArray){
//     //validate data
//     for (let i = 0 ; i < dataArray.length ; i++){
//     if(typeof nilaiAwal == "number" && typeof nilaiAkhir == "number" && typeof dataArray[i] == "number" == true){
        
//         console.log("data valid");
//     }else{
//         console.log("tidak valid");
//     }
// }
//     //
    
    

// }


// seleksiNilai(1,2,[1,2]);


function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray) {
    //validasi tipe data harus number
    for (let i = 0; i <dataArray.length; i++){
        if (typeof dataArray[i] !== "number"){
            console.log("input Bukan Number");
        }
    }
    //validasi nilai awal dan akhir
    if(typeof nilaiAwal !== "number"){
        console.log("nilai awal bukan number");
    }if(typeof nilaiAkhir !== "number"){
        console.log("nilai akhir bukan number");
    }

    //validasi nilai awal > nilai akhir & dataArray harus < 5
    if(nilaiAwal > nilaiAkhir){
        console.log("nilai akhir harus lebih besar dari nilai awal");
    }else if(dataArray.length < 5){
        console.log("Jumlah angka dalam array harus lebih dari 5");
    }else{
        // console.log(dataArray);
        const hasil = dataArray.sort((a,b) => a - b );
        const hasil1 = hasil.filter(element => element > nilaiAwal && element < nilaiAkhir);
        console.log(hasil1);
    }

}

seleksiNilai(2,20,[2,25,4,14,17,30,8])