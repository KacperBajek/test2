// TYP PROSTY BOOLEAN: true / false 


// const num= 4;

// //console.log (num > 5);
// const fn1 = () => {
//     console.log("wywołanie funkcji 1")
// }

// if(num >= 5) {
//     console.log("Liczba jest większa lub równa 5");
// }
// else {
//     console.log("Liczba mniejsza od 5")
//     document.write("Coś nie działa")
// }


// const num2= 6;

// if(num2 === 7){
//     console.log("Liczba jest równa7");
// }
// else{
//     console.log("Error");
// }

// ===  sprawdza wartość i typ danych
// == sprawdza tylko wartość 
// = To nie porównanie tylko przypisanie
// !== negacja

// const role = "ziomek";
// const logged = true;
//  && and / i (logiczne i)
//  || or / lub

// if(role === "admin" && logged === true){
//     console.log("Witaj w Panelu administracj");
// }
// else{
//     console.log("zaloguj się lub zarejestruj");
// }


// if(role === "admin" || role === "moderator"){
//     console.log("Witaj w panelu administracji")
// }
// else {
//     console.log("error");
// }

// if(role === "admin"){
//     console.log("witaj w panele admina");
// }
// else if(role === "moderator"){
//     console.log("Witaj w panelu moderatora")
// }
// else if(role ===  "user"){
//     console.log("Witaj w panelu użytkownika");
// }
// else {
//     console.log("Spierdalaj");
// }


const godzina = new Date().getHours();

//  const godzina = 10;


// if(godzina >=0 && godzina < 6){
//     console.log("Cisza nocna");
// }
// else if( godzina >=6 && godzina < 12){
//     console.log("Good morning");
// }
// else if( godzina >=12 && godzina <18){
//     console.log("Good afternoon");
// }
// else if(godzina >=18 && godzina <24){
//     console.log("Goodnight");
// }

if(godzina >=0 && godzina < 6){
    const godzinaElement = document.getElementById("godzina");
  godzinaElement.textContent = "Cisza nocna" ;
  godzinaElement.style.border = "20px  solid yellow";
  console.log(godzinaElement);
}
else if( godzina >=6 && godzina < 12){
    const godzinaElement = document.getElementById("godzina");
    godzinaElement.textContent = "Good Morning" ;
    godzinaElement.style.border = "20px  solid green";
    console.log(godzinaElement);
}
else if( godzina >=12 && godzina <18){
    const godzinaElement = document.getElementById("godzina");
    godzinaElement.textContent = "Good afternoon" ;
    godzinaElement.style.border = "20px  solid red";
    console.log(godzinaElement);
}
else if(godzina >=18 && godzina <24){
    const godzinaElement = document.getElementById("godzina");
    godzinaElement.textContent = "Goodnight" ;
    godzinaElement.style.border = "20px  solid blue";
  console.log(godzinaElement);
}
else {
    const godzinaElement = document.getElementById("godzina");
    godzinaElement.textContent = "Nie ma takiej godziny" ;
    godzinaElement.style.border = "20px  solid blue";
  console.log(godzinaElement);
}