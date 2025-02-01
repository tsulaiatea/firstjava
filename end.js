// 1. დაამატეთ ელემენტი მასივის ბოლოს. 
// დაამატეთ "orange" მასივის ბოლოში. 



// let fruits = ["apple", "banana", "cherry"];
// fruits. push("orange");
// console.log(fruits);

// 2. დავალება: ელემენტის ამოღება 
//  ამოიღეთ ელემენტი მასივის დასაწყისიდან. 
// წაშალეთ პირველი ელემენტი და აჩვენეთ დარჩენილი მასივი. 

// let numbers = [10, 20, 30, 40]; 
// numbers.shift()
// console.log(numbers);


// 3. დაამატეთ ელემენტი კონკრეტულ ინდექსზე. 
// let colors = ["red", "blue", "green"]; 
// // ჩასვით "yellow" ინდექსზე 1. 

// let colors = ["red", "blue", "green"]
// colors .splice(1, 0, "yellow")
// console.log(colors);

// 4 ორი მასივი გააერთიანეთ ერთ მასივად. 
// let animals1 = ["cat", "dog"]; 
// let animals2 = ["lion", "tiger"]; 
// გააერთიანეთ მასივები და მიიღეთ ახალი მასივი. 

// let animals1 = ["cat", "blue", "dog"];
// let animals2 = ["lion", "tiger"];
// let animals = animals1 . concat(animals2);
// console.log(animals);

// 5 დაალაგეთ მასივი ზრდადობის მიხედვით. 
// let scores = [50, 30, 20, 10, 40]; 
// დაალაგეთ მასივი. 

// let scores = [50, 30, 20, 10, 40];
// scores . sort();
// console.log(scores);

// 6 გაერთიანეთ მასივის ყველა ელემენტი ერთ სტრინგში. 
// let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
// გააერთიანეთ ელემენტები, სადაც მათ შორის იქნება " - ". 

// let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
// let result = cities . join(" - ");
// console.log(result);

// 7 შეაiტრიალეთ მასივი. 
// let letters = ["a", "b", "c", "d"]; 

// let letters = ["a", "b", "c", "d"]; 
// letters . reverse();
// console.log(letters);

// 8 დაადგინეთ მასივის სიგრძე. 
// let books = ["Math", "Science", "History"]; 
// გაარკვიეთ მასივის სიგრძე.

// let books = ["Math", "Science", "History"];
// let book = books . length;
// console.log(book);


// task 9
// let number = [1, 2, 3, 4, [11, 12, 13, [50, 60], 14]];
// // console.log(number [2]);
// // console.log(number [4] [0]);
// console.log(number [4] [3] [1]);

// task10

// let box = "saba";
// let box1 = box.at(-2);
// console.log(box1);

// let box = "saba";
// let box1 = box. charAt(3);
// console.log(box1);

// task11

// let box = "saba"
// let box1 =box.repeat(3);
// console.log(box1);


// let box = "saba"
// let box1 =box.startsWith("S");
// console.log(box1);

// let box = "saba"
// let box1 =box.startsWith("s");
// console.log(box1);

// let box = "saba"
// let box1 =box.includes("b");
// console.log(box1);

// let box = "saba"
// let box1 =box.includes("k");
// console.log(box1);

// let box = "saba"
// let box1 =box.indexOf("b");
// console.log(box1);

// let box = "saba"
// let box1 =box.lastIndexOf("b");
// console.log(box1);

// let box = "saba"
// let box1 =box.toLocaleLowerCase();
// console.log(box1);

// let box = "saba"
// let box1 =box.toLocaleUpperCase();
// console.log(box1);

// let box = "  saba   "
// let box1 =box.trim();
// console.log(box1);

// let box = "  saba   "
// let box1 =box.trimStart();
// console.log(box1);

// let box = "  saba   "
// let box1 =box.trimEnd();
// console.log(box1);

// 30 იანვარი task_1
// დავალება 1: სტრიქონის სიგრძე 

// let text = "home";
// let text1 = text.length;
// console.log(text1);

// task_2 შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ დიდი ასოებით. 

// let text = "home";
// let text1 = text.toLocaleUpperCase();
// console.log(text1);

// task_3 შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ პატარა ასოებით. 

// let text = "HOME";
// let text1 = text.toLocaleLowerCase();
// console.log(text1);

// task_4 შეიტანეთ სტრიქონი და შეამოწმეთ, რა სიმბოლოა კონკრეტულ ინდექსზე. 

// let text = "home";
// let text1 = text.at(2);
// console.log(text1);

// task_5 შეიტანეთ სტრიქონი და ამოჭერით მხოლოდ ნაწილობრივი სტრიქონი (ინდექსებით განსაზღვრული). 

// let text = "home";
// let text1 = text.substring(1,3);
// console.log(text1);


// task_6 შეიტანეთ სტრიქონი და შეცვალეთ სიტყვა "hello" სიტყვით "hi". 
// let text = "home";
// let text1 = text. replace("home", "hi");
// console.log (text1);

// task_7 შეიტანეთ სტრიქონი, რომელშიც სიტყვები გამოყოფილია მძიმეთი, და გაყავით სტრიქონი შესაბამის ნაწილებად (მიუთითეთ split() მეთოდზე). 

// let text = "home, street, car";
// let text1 = text. split(",");
// console.log (text1);

// task_8 შეამოწმეთ, იწყება თუ არა სტრიქონი სიტყვით "Java"

// let text = "home";
// let text1 = text. startsWith("java");
// console.log (text1);

// task_9 შეამოწმეთ, მთავრდება თუ არა სტრიქონი სიტყვით "Script". 
// let text = "home";
// let text1 = text. endsWith("script");
// console.log (text1);

// task_10 შეიტანეთ სტრიქონი და გამეორეთ ის 4-ჯერ. 
// let text = "home";
// let text1 = text.repeat(4);
// console.log (text1);

// task_11 შეიტანეთ სტრიქონი, რომელშიც იქნება ცარიელი ადგილები დასაწყისსა და ბოლოში. წაშალეთ ეს ცარიელი ადგილები. 

// let text = "  home  ";
// let text1 = text.trim();
// console.log (text1);


// let text = "  home  ";
// let text1 = text.trimStart();
// console.log (text1);

// let text = "  home  ";
// let text1 = text.trimEnd();
// console.log (text1);

// task_12 შეიტანეთ სტრიქონი და შეამოწმეთ, თუ შეიცავს თუ არა ის სიტყვას "JavaScript". 
// let text = "home";
// let text1 = text.includes("javascript");
// console.log (text1);



// 31 იანვარი

// let userName = prompt ("დაწერეთ სახელი:");
// console.log(userName);

// let age = Number (prompt ("დაწერეთ ასაკი:"));
// console.log(age);


// let userName = prompt ("დაწერეთ სახელი:");
// let result = userName. trim();
// console.log(result);

// let userName = prompt ("დაწერეთ სახელი:");
// let result = userName. toLocaleUpperCase()
// console.log(result);

// let userName = prompt ("დაწერეთ სახელი:");
// let result = userName. charAt(0). toLocaleUpperCase() + userName. slice(1);
// console.log(result);


// let userName = prompt ("დაწერეთ სახელი:");
// let result = userName. charAt(0). toLocaleUpperCase() + userName. slice(1). toLocaleLowerCase();
// console.log(result);

// შექმენით ობიექტი, რომელიც შეიცავს შემდეგ მონაცემებს: 
// სტრიქონი – მაგალითად, სტუდენტის სახელი. 
// რიცხვი – მაგალითად, ასაკი. 
// ბულიანი მნიშვნელობა – მაგალითად,თუ სწავლობს ახლა 
// ობიექტი – სტუდენტის მისამართი (ქალაქი და ქუჩა). 
// მასივი – სტუდენტის საყვარელი საგნების სია 

// let student = {
//     name: "saba",
//     age: 15,
//     is_student: true,
//     favoriteSubjects:["Math", "History", "Sports", "Literature", "Physics"],
//     addres:{
//         city :  "poti",
//         street: "Agmashenebeli",
//     },
// }
// console.log(student.favoriteSubjects[0]);


// შექმენი ობიექტი  წიგნის  
// ობიექტი უნდა შეიცავდეს მონაცემების ყველა ტიპს: 
// სტრიქონი (string): დასახელება, ავტორი, ადგილი. 
// რიცხვი (number): ფასი. 
// ბულიანი (boolean): ხელმისაწვდომობა. 
// მასივი (array): ჟანრები 
// ობიექტი (object): ავტორი  

// let book = {
//     author:{
//         name:"ნოდარ დუმბაძე",
//         birthYear:1928,
//         placeOfBirth: "თბილისი",
        
//     },
//     title: "თეთრი ბაირაღები",
//     place: "თბილისი",
//     price: 20,
//     avialable: true,
//     genre:[ "სათავგადასავლო", "დეტექტივი", " ფანტასტიკა" ],
    
// }
// book. price = 15;
// console.log(book);




// console.log(`სათავგადასავლო რომანი ${book.title} ერთ-ერთი საუკეთესო ნაწარმოებია`);

// console.log(`${book.author["name"]} ერთ-ერთი საუკეთესო მწერალია`);

// console.log(book.genre [1]);



    






// შექმენი ობიექტი, რომელიც აღწერს თეატრის ბილეთს. 

// სტრიქონი (string): ბილეთის ნომერი, თეატრის სახელი, შოუ. 

// რიცხვი (number): ბილეთის ფასი. 

// ბულიანი (boolean): თუ ბილეთი ხელმისაწვდომია. 

// ობიექტი (object): თეატრის მისამართი. 

// თარიღი (Date): ბილეთის შეძენის თარიღი. 

//   შეცვალეთ ბილეთის ფასი და ხელმისაწვდომობა (isAvailable). 


// let theaterTicket = {
//     ticketNumber:"N1030",
//     thearName: " ვ.გუნიას სახელობის თეატრი ",
//     show: "ტყუილი",
//     price: 20,
//     avialable: true,
//     address: {
//         city :  "ფოთი",
//         street: "რუსთაველის რკალი",
//     },
//     dateOfTicketPurchase: "02.05.2025"
// }

// console.log(`ძალიან მომეწონა და საინტერესო იყო სპექტაკლი ${theaterTicket.show} და გირჩევთ დაესწროთ`);

// theaterTicket.price = 25;
// theaterTicket.avialable = false
// console.log(theaterTicket);


// console.log(theaterTicket);

    

    









    




















































