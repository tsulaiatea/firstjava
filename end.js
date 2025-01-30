// 1. დაამატეთ ელემენტი მასივის ბოლოს. 
// დაამატეთ "orange" მასივის ბოლოში. 



let fruits = ["apple", "banana", "cherry"];
fruits. push("orange");
console.log(fruits);

// 2. დავალება: ელემენტის ამოღება 
//  ამოიღეთ ელემენტი მასივის დასაწყისიდან. 
// წაშალეთ პირველი ელემენტი და აჩვენეთ დარჩენილი მასივი. 

let numbers = [10, 20, 30, 40]; 
numbers.shift()
console.log(numbers);


// 3. დაამატეთ ელემენტი კონკრეტულ ინდექსზე. 
// let colors = ["red", "blue", "green"]; 
// // ჩასვით "yellow" ინდექსზე 1. 

let colors = ["red", "blue", "green"]
colors .splice(1, 0, "yellow")
console.log(colors);

// 4 ორი მასივი გააერთიანეთ ერთ მასივად. 
// let animals1 = ["cat", "dog"]; 
// let animals2 = ["lion", "tiger"]; 
// გააერთიანეთ მასივები და მიიღეთ ახალი მასივი. 

let animals1 = ["cat", "blue", "dog"];
let animals2 = ["lion", "tiger"];
let animals = animals1 . concat(animals2);
console.log(animals);

// 5 დაალაგეთ მასივი ზრდადობის მიხედვით. 
// let scores = [50, 30, 20, 10, 40]; 
// დაალაგეთ მასივი. 

let scores = [50, 30, 20, 10, 40];
scores . sort();
console.log(scores);

// 6 გაერთიანეთ მასივის ყველა ელემენტი ერთ სტრინგში. 
// let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
// გააერთიანეთ ელემენტები, სადაც მათ შორის იქნება " - ". 

let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
let result = cities . join(" - ");
console.log(result);

// 7 შეაiტრიალეთ მასივი. 
// let letters = ["a", "b", "c", "d"]; 

let letters = ["a", "b", "c", "d"]; 
letters . reverse();
console.log(letters);

// 8 დაადგინეთ მასივის სიგრძე. 
// let books = ["Math", "Science", "History"]; 
// გაარკვიეთ მასივის სიგრძე.

let books = ["Math", "Science", "History"];
let book = books . length;
console.log(book);


// task 9
// let number = [1, 2, 3, 4, [11, 12, 13, [50, 60], 14]];
// // console.log(number [2]);
// // console.log(number [4] [0]);
// console.log(number [4] [3] [1]);

// task10

let box = "saba";
let box1 = box.at(-2);
console.log(box1);

// let box = "saba";
// let box1 = box. charAt(3);
// console.log(box1);









































