// SHART OPERATORLARI

//  == - qiymat buyicha tenglash
//  === - qattiy tenglik (qiymat, malumot turi)
//  ! = - teng emas qiymat
//  ! == - teng emas (qiymat, malumot turi)
//  >
//  <
//  > =
//  < =

// if(shart) {
    
// }

// if(2=='12') {
//     console.info('shart to\'g\'ri')
// } else if (33 > 122){
// console.info('2-shart togri')
// } else {
//     console.info('xech qaysi shart bajarilmadi!')
// }

/* var number = +prompt('Son kiriting: ')

if(number > 1) {
    console.info(number + ' 1 dan katta! ')
}else if(number < 1) {
    console.info(number + ' 1 dan kichik!')
}else {
    console.info(number + ' 1 ga teng')
} */

// var num1 = +prompt('Birinchi son: ')
// var num2 = +prompt('Ikkinchi son: ')

// && va
// || yoki

// if(num1 > num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.info(num1 + ' katta ' + num2 + ' dan.')
// }else if(num1 < num2 && !isNaN(num1) && !isNaN(num2))
// { console.info(num1 + ' kichik ' + num2 + ' dan . ')
// }else if(num1 === num2 && !isNaN(num1) && !isNaN(num2))
// console.info(num1 + ' teng ' + num2 + 'ga.')
// else {
//     if(isNaN(num1) && isNaN(num2)) {
//         console.error('Siz umuman son kiritmadingiz ')

//     }else if (isNaN(num1)){
//         console.error('birinchisi son emas! ')
//     }else {
//         console.error('ikkinchisi son emaas! ')
//     }
// }


//  var pass = prompt('Yashirin sozni yozing: ')
//  if(pass === 'salom' || pass === 'privet' || pass === 'hi'){
//  console.info('parolni qattan bildiz')
// }else {
//     console.info('Siz nima qilsihga urinyapsiz!')
// }
/* uy1 ****************************************************************************************************************************************/
// var num = prompt('yoshingizni kiriting: ')
// if(num > 0 && num <= 18){ alert ('oqish kere')}
// if(num > 18 && num <= 50){ alert ('ishlash kere')
// }
// if(num > 50 && num <= 59){ alert ('Siz yaqinda nafaqaga chiqasiz')
// }
// if(num > 59 && num <= 100){ alert ('nafaqadasiz')
// }
// if(num > 100 && num <= 150){ alert ('xat kepqoladi')
// }
// else(isNaN(num))
//     alert(' sonlardan foydalaning: ')

// uy2*************************************************************************************************************************************
// var num = +prompt('Soatni 0 dan 24 gacha kiriting')

// if (num >= 6 && num <= 11){
//     alert(" soat tongi " + num + ":00 AM")
// } 
// if (num == 12){
//     alert(" soat abetki " + num + ":00 PM")}
// if (num == 13){
//     alert(" soat abetki " + 1 + ":00 PM")
// }
// if (num == 14){
//     alert(" soat abetki " + 2 + ":00 PM")
// }
// if (num == 15){
//     alert(" soat abetki " + 3 + ":00 PM")
//     }
// if (num == 16){
//     alert(" soat abetki " + 4 + ":00 PM")
// }
// if (num == 17){
//     alert(" soat kechki " + 5 + ":00 PM")
// }
// if (num == 18){
//     alert(" soat kechki " + 6 + ":00 PM")
// }
// if (num == 19){
//     alert(" soat kechki " + 7 + ":00 PM")
// }
// if (num == 20){
//     alert(" soat kechki " + 8 + ":00 PM")
// }
// if (num == 21){
//     alert(" soat kechki " + 9 + ":00 PM")
// }
// if (num == 22){
//     alert(" soat kechki " + 10 + ":00 PM")
// }
// if (num == 23){
//     alert(" soat kechki " + 11 + ":00 PM")
// }
// if (num == 24){
//     alert(" soat tungi " + 12 + ":00 AM")
// }
// if (num >= 0 && num <= 6){
//     alert(" soat tungi " + num + ":00 AM")
// }
// else(isNaN(num))
// alert (' sonlardan foydalaning: ')

// uy ishi 3*********************************************************************************************************************************
var num1 = +prompt('birinch sonni kiriting sonlar bir hil bomasin')
var num2 = +prompt('ikkinchi sonni kiriting sonlar bir hil bomasin')
var num3 = +prompt('uchinchi sonni kiriting sonlar bir hil bomasin')

if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)){
    alert(num1)}
if((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)){
    alert(num2)}
if((num3 > num2 && num3 < num1) || (num3 < num2 && num3 > num1)){
    alert(num3)}
if((num3 == num2 && num3 == num1) || (num3 == num2 && num3 == num1)){
    alert(' sonlar teng ')}
// else(isNaN(num1 || num2 || num3))
//     alert (' sonlardan foydalaning: ')

    
