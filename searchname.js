// HomeWork Javascript 2
// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan
// callback function dengan data sebagai berikut:
// const name = [
//     ‘Abigail’, ‘Alexandra’, ‘Alison’,
//     ‘Amanda’, ‘Angela’, ’Bella’,
//     ‘Carol’, ‘Caroline’, ‘Carolyn’,
//     ‘Deirdre’, ‘Diana’, ‘Elizabeth’,
//     ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]


// Contoh:
// searchName(“an”, 3, callback)

// Output: 
// [“Alexandra”,”Amanda”,”Angela”]

// NOTED!!!
// 1. Validasi Tipe data dari masing masing parameter
// 2. parameter ke 2 tidak boleh kurang dari 0
// 3. menggunakan function callback



// ============================================================ //


const searchName = (cari, batas, callback) => {
    //validasi data
    if (typeof cari !== "string") return "Data harus berupa string"
    if (typeof batas !== "number") return "Data harus berupa number"
    if (typeof callback !== "function") return "Data harus function"
    
    //Aturan
    if (batas <= 0) return "Data yang dimasukan tidak boleh kurang dari 0"
    

    //Proses
    const name = [
        "Abigail", "Alexandria", "Alison", "Amanda",
            "Angela", "Bella", "Carol", "Caroline", "Carolyn",
            "Deirdre", "Diana", "Elizabeth", "Ella", "Faith",
            "Olivia", "Penelope"];
    let myArray = [];
    for (let i = 0 ; i < name.length ; i++ ){
        if (myArray.length < batas && callback(name[i], cari)){
            myArray.push(name[i]);
        }
    }
    return myArray;
}  

const cb = (element, batasan) => {
    return element.toLowerCase().includes(batasan); //array index i di perkecil. dicetak kalo ada huruf ("an")
}

console.log(searchName("an", 2, cb));
console.log(searchName("an", 3, cb));
console.log(searchName(2, 3, cb));
console.log(searchName("an", "String", cb));
console.log(searchName("an", 3, "cb"));