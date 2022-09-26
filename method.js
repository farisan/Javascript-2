//Method (concat, pop, splice, slice, shift)


// Method Concat()
// immutable => Tidak berubah nilai array awal nya
// Concat => untuk menambahkan nilai array sebelumnya dengan data yang ditambahkan dimulai dari akhir array
const data = [1, 2, 3, 4, 5, "a"];

const data1 = data.concat(6, 7, 8);
console.log(data);
console.log(data1);





// Method Pop()
// Mutable => Merubah nilai array sebelunya
// Pop => menghapus nilai akhir dari array
const Person = ["Eri", "Nika", "Bila", "Camelia"];

let prs = Person.pop();
console.log(Person);
console.log(prs); 









//Method Splice()
// Mutable => Merubah nilai array sebelumnya
// Splice => untuk menambahkan/menghapus element dalam array
// splice(index, howmany, item1...)
// index => REQUIRED. posisi yang ingin di tambah / di hapus
// howmany => OPSIONAL. jumlah item yang dihapus
// item1 => OPSIONAL. Element baru yang ingin di tambahkan
const buah = ["Anggur", "Stroberi", "Mangga", "Apel"];

const fruit = buah.splice(1,2, "durian")
console.log(buah);
console.log(fruit);







// Method Slice()
// Immutable => Tidak merubah nilai array sebelumnya
// slice => memotong element array 
// slice(start, end)
// start => posisi element array mulai yang ingin di potong
// end => posisi element array akhir yang ingin di potong
const num = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const num1 = num.slice(1, 4);
console.log(num);
console.log(num1);







// Method Shift()
// Mutable => Mengganti nilai array awalnya
// shift => menghapus element array pertama dan menggeser element setelah nya menjadi element yang di hapus
const array = [1, 2, 3, 4];
const array1 = array.shift();
console.log(array);
console.log(array1);

const array2 = array.shift();
console.log(array);
console.log(array2);