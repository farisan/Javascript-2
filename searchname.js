
const name = [
        "Abigail",
        "Alexandria",
        "Alison",
        "Amanda",
        "Angela",
        "Bella",
        "Carol",
        "Caroline",
        "Carolyn",
        "Deirdre",
        "Diana",
        "Elizabeth",
        "Ella",
        "Faith",
        "Olivia",
        "Penelope"]


const searchName = (cari, batas, callback) => {
    //validasi data
    if (typeof cari !== "string") return "Data harus berupa string"
    if (typeof batas !== "number") return "Data harus berupa number"
    if (typeof callback !== "function") return "Data harus function"

    if (batas <= 0) return "Data yang dimasukan tidak boleh kurang dari 0"

    let myArray = [];
    for (let i = 0 ; i < name.length ; i++ ){
        if (callback(name[i], cari) && myArray.length < batas ){
            myArray.push(name[i]);
        }
    }
    return myArray;
}  

const cb = (element, batasan) => {
    return element.toLowerCase().includes(batasan);
}

console.log(searchName("an", 3, cb));