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


// 3 თებერვლის დავალება
// 1) for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს რიცხვებს 1-დან 10-მდე. 
// for (let n=1; n <=10; n++){
//     console.log(n);
    
// }

// 2) for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს ლუწ რიცხვებს 2-დან 20-მდე. 

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i < x. length; i ++){
// if (x[i] % 2 === 0) {
//     console.log(x [i]);
    
// }
// }

// 3) ჯამი 1 დან 100 მდე
// let sum = 0
// for (let i =1; i <=100; i++){
//     // sum = sum +i 
//     sum += i
// }
// console.log(sum);


// 4) for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს რიცხვებს 10-დან 1-მდე. 
// for (let n=10; n >=1; n--){
//         console.log(n);
// }

// 5) დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის ლუწი თუ კენტი. თუ რიცხვი ლუწია, დაბეჭდეთ "რიცხვი ლუწია", ხოლო თუ კენტია - "რიცხვი კენტია". 
// let age = Number (prompt ("დაწერეთ რიცხვი:"));
// if (age % 2 ===0){
// console.log("რიცხვი ლუწია");

// }else {(age % 2 ===1) 
//     console.log("რიცხვი კენტია");
    
// }

// 6) დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის დადებითი, უარყოფითი ან ნული. შესაბამისად, დაბეჭდეთ "რიცხვი დადებითია", "რიცხვი უარყოფითია" ან "რიცხვი ნულია". 

// let age = Number (prompt ("დაწერეთ რიცხვი:"));
// if (age > 0){
// console.log("რიცხვი დადებითია");

// } else if (age < 0) {
//     console.log("რიცხვი უარყოფითია");
    
// }else { (age = 0)
//     console.log("რიცხვი ნულია");
    
// }

// 7) დაწერეთ კოდი, რომელიც იღებს წელს და ამოწმებს, არის თუ არა ის ნაკიანი. ნაკიანი წელია, რომელიც იყოფა 4-ზე, მაგრამ არ იყოფა 100-ზე, გარდა იმ შემთხვევისა, როცა ის იყოფა 400-ზე. თუ წელი ნაკიანია, დაბეჭდეთ "წელი ნაკიანია", წინააღმდეგ შემთხვევაში - "წელი არ არის ნაკიანი". 
    // let year = Number (prompt ("დაწერეთ წელი"));
    // if ((year % 4 ===0 && year % 100 !==0) || year % 400 ===0) {
    //     console.log(" წელი ნაკიანია");
        
    // }else {
    //     console.log("წელი არ არის ნაკიანი");
        
    // }

    // 8) დაწერეთ კოდი, რომელიც იღებს სტუდენტის ქულას (0-დან 100-მდე) და დაბეჭდავს შესაბამის შეფასებას შემდეგი კრიტერიუმების მიხედვით: 

// 90-100: "A" 

// 80-89: "B" 

// 70-79: "C" 

// 60-69: "D" 

// 0-59: "F" 
// let score = 80;
// if (score >= 90 && score <= 100) {
// console.log("A");

// }else if (score >= 80 && score <= 89){
//     console.log("B");
    
// }else if (score >= 70 && score <= 79){
//     console.log("C");
    
// }else if (score >= 60 && score <= 69) {
//     console.log("D");
    
// }else if (score = 0 && score <= 59){
//     console.log("F");
    
// }

// 9) დაწერეთ კოდი, რომელიც იღებს პირის ასაკს და დაბეჭდავს შესაბამის კატეგორიას: 

// 0-12 წელი: "ბავშვი" 

// 13-17 წელი: "მოზარდი" 

// 18-64 წელი: "ზრდასრული" 

// 65 და მეტი: "ხანდაზმული" 
// let age = 30;
// if (age >=0 && age <=12){
//     console.log("ბავშვი");
    
// } else if (age >=13 && age <=17){
//     console.log("მოზარდი");
    
// }else if (age >=18 && age <=64){
//     console.log("ზრდასრული");
// }else { (age >=65)
//     console.log("ხანდაზმული");
// }
    
// 10) დაწერეთ კოდი, რომელიც იღებს რიცხვს და დაბეჭდავს შეტყობინებას, თუ რამდენი ციფრი აქვს მას. მაგალითად, თუ რიცხვი არის 123, დაბეჭდეთ "რიცხვს აქვს 3 ციფრი". 
// let num = Number (prompt ("დაწერეთ რიცცხვი"));

// რიცხვის რაოდენობის დათვლა
// let count = 123;
// let result = count. toString().length;
// console.log(result);

//        კვირის დღეები
// let day = 2;
// if(day % 7 ===0 || day % 7 ===6){
//     console.log("უქმე");
    
// }else{
//     console.log("სამუშაო დღე");
    
// }
// let day = 2;
// if(day >=1 && day <=5){
//     console.log("work");
    
// }else if (day === 6 || day ===7){
//     console.log("not work");
    
// }else{
//     console.log("it is not rigth work");
    
// }

// 5 თებერვლის ლექციის დავალება  if/else  გამოიყენება, ternary oparator -ით.
// for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს რიცხვებს 1-დან 10-მდე. 

// for (let n=1; n <=10; n++){
    // console.log(n ? n : "");

    
// }
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let num of number) {
//     console.log(num);
    
// }


//  დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს ლუწ რიცხვებს 2-დან 20-მდე.

// for (let i = 2; i <=20; i +=2) console.log(i);
    
//  დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით გამოთვლის რიცხვების ჯამს 1-დან 100-მდე. 

 
// let sum = 0
//  for (let i =0; i <=100; sum += i++)
//     console.log(sum);

// for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს რიცხვებს 10-დან 1-მდე. 

// for (let n=10; n >=1; n--) 
//     console.log(n);

// 

// დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის ლუწი თუ კენტი. თუ რიცხვი ლუწია, დაბეჭდეთ "რიცხვი ლუწია", ხოლო თუ კენტია - "რიცხვი კენტია". 
            
    // let age = prompt ("დაწერეთ რიცხვი:");
    // let result = age % 2 ===0? "ლუწი" : "კენტი"  
    // console.log(result);

    // დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის დადებითი, უარყოფითი ან ნული. შესაბამისად, დაბეჭდეთ "რიცხვი დადებითია", "რიცხვი უარყოფითია" ან "რიცხვი ნულია". 
    
    // let age = prompt ("დაწერეთ რიცხვი:");
    // let result = (age >0 ? "დადებითია" : "უარყოფითია")
    // console.log(result);

    // დაწერეთ კოდი, რომელიც იღებს წელს და ამოწმებს, არის თუ არა ის ნაკიანი. ნაკიანი წელია, რომელიც იყოფა 4-ზე, მაგრამ არ იყოფა 100-ზე, გარდა იმ შემთხვევისა, როცა ის იყოფა 400-ზე. თუ წელი ნაკიანია, დაბეჭდეთ "წელი ნაკიანია", წინააღმდეგ შემთხვევაში - "წელი არ არის ნაკიანი". 
    
    // let year = prompt ("დაწერეთ წელი");
    // let result =(year % 4 ===0 && year % 100 !==0 || year % 400 ===0 ? "ნაკიანია" : "არ არის ნაკიანი")
    // console.log(result);

    // დაწერეთ კოდი, რომელიც იღებს სტუდენტის ქულას (0-დან 100-მდე) და დაბეჭდავს შესაბამის შეფასებას შემდეგი კრიტერიუმების მიხედვით: 

// 90-100: "A" 

// 80-89: "B" 

// 70-79: "C" 

// 60-69: "D" 

// 0-59: "F" 

// let score = parseInt (prompt ("მიღებული ქულა 1-100"), 10);
// let result = score>= 90  && score <=100 ? "A" :
//             score >= 80  && score <=89 ? "B" :
//             score >= 70  && score <=79? "C" :
//             score >= 60  && score <=69? "D" : "F";
// console.log(result);
             
// დაწერეთ კოდი, რომელიც იღებს პირის ასაკს და დაბეჭდავს შესაბამის კატეგორიას: 

// 0-12 წელი: "ბავშვი" 

// 13-17 წელი: "მოზარდი" 

// 18-64 წელი: "ზრდასრული" 

// 65 და მეტი: "ხანდაზმული" 

// let age =prompt("დაწერე ასაკი");
// let result = age <=12 ? "child" :
//     age >=13 && age <=17 ? "teenager" :
//     age >=18 && age <=64 ? "an adult" :
//     age >=65 ? "elderly": "invalid age"
// console.log(result);

// დაწერეთ კოდი, რომელიც იღებს რიცხვს და დაბეჭდავს შეტყობინებას, თუ რამდენი ციფრი აქვს მას. მაგალითად, თუ რიცხვი არის 123, დაბეჭდეთ "რიცხვს აქვს 3 ციფრი"
    
// let count = Number(prompt("დაწერე რიცხვი"));
// let result = count <10 ? "1" :
//     count <100 ? "2":
//     count < 1000 ? "3": "4";
// console.log(result);

// დაწერეთ კოდი, რომელიც იღებს კვირის დღის ნომერს (1-დან 7-მდე, სადაც 1 შეესაბამება ორშაბათს და 7 - კვირას) და დაბეჭდავს შეტყობინებას, არის თუ არა ეს დღე სამუშაო დღე თუ დასვენების დღე. 

// let day = prompt("კვირის დღე - რიცხვით");
// let week = day % 7 ===0 || day % 7 ===6 ? " უქმე":" სამუშაო დღე"
// console.log(week);



   










    




















































