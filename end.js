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






















