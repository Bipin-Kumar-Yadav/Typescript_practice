"use strict";
/* -----------------------type script is a strongly type language----------------------------------*/
// let x: number = 1;
// x='Bipin';
// console.log(x);
/*---------------how to assign type to function argument------------------------------------------ */
// function xyz(a:string ){
//     console.log(a)
// }
// xyz("Bipin")
/*----------------how to assign type to return of a function------------------------------------------ */
// function sum(a:number,b:number):number{
//     return a+b;
// }
// const val : number = sum(12,32)
// console.log(val)
// const sum = (a:number,b:number):number =>{
//     return a+b;
// }
// // console.log(sum(12,23))
// const val:number = sum(32,12);
// console.log(val);
// function isLegal(age:number){
//     return age>10
// }
// console.log(isLegal(20))
/*--------------------write a function that take another fn as a input and run it after 1 sec --------------------- */
// function xyz(fn: ()=> void){
//     setTimeout(()=>{fn()},5000)
// }
// function a(){
//     console.log("hi");
// }
// xyz(a);
/*----------------------- ts config --------------------------------------------------------- */
/*---------------------Interfaces --------------------------------------------------- */
// how to assign types to objects
// interface User {
//     firstName : string,
//     lastName : string,
//     age : number,
//     email? : string,
// }
// function greet(user:User){
//     console.log(user.firstName)
// }
// greet({
//     firstName : "BIPIN",
//     lastName : "YADAV",
//     age : 23,
// })
/*-------------------------------------Types ---------------------------- */
// very similar to interface but have some difference like it cant use to define class 
// create a fn that will print id which can either a number or string
// function fn(user : User){
//     console.log(user.id)
// }
// type User = {
//     firstName : string,
//     lastName : string,
//     id : number | string
// }
// fn({
//     firstName : "bipin",
//     lastName : "Yadav",
//     id : 1
// })
// fn({
//     firstName : "ho",
//     lastName : "ko",
//     id : "sd"
// })
// let you merge two types 
// type Manager = {
//     name : string,
//     startDate : Date
// }
// type Employee = {
//     name : string,
//     department : string,
// }
// type TeachLead = Employee & Manager;
/* ------------------------------ Array in ts ----------------------------------- */
// create a funtion that return max ele of an array 
// function maxEl (arr : number[]){
//     let max = 0;
//     for(let i=0;i<arr.length; i++){
//         if(arr[i]>max) max=arr[i]
//     }
//     return max
// }
// console.log(maxEl([1,3,2,5]))
// // filter the user whoes age is gt 18
// interface User {
//     firstName : string,
//     lastName : string,
//     age : number
// }
// function filterUser ( user : User[]){
//     return user.filter((el)=> el.age>18)   
// }
// console.log(filterUser([
//     {
//         firstName : "bb",
//         lastName : 'ku',
//         age : 17
//     },
//     {
//         firstName : ' sbb',
//         lastName : "kj",
//         age : 21
//     },
//     {
//         firstName : "ds",
//         lastName : "ks",
//         age: 43
//     }
// ]))
// /*----------------- Enums ------------------------------------- */
// // lets say implement a fn which upfront tell you that you a call a fn with up down, left or right as param 
// type KeyInputs = "up" | "down" | "left" | "right"
// function doSomething(keyPressed : KeyInputs){
//     console.log("move "+keyPressed);
// }
// doSomething("up")
// doSomething("down")
// // second way is using enum 
// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
// function doSomethingAgain(keyPressed : Direction){
//     if(keyPressed === Direction.Down) console.log("hlw")
// }
// doSomethingAgain(Direction.Down);
// // we can give value also 
// enum Dir{
//     Up = "up",
//     Down  = "down"
// }
/*---------------------------------------Generic ---------------------------- */
// create a function which take array as input and return first ele array can be string or number 
// type Type = number[]  | string[]
// function fn( arr : Type){
//     return arr[0]
// }
// console.log(fn([2,3,4]))  // return type is string[] | number[] but ideally it should be number[]
// console.log(fn(["hi","hlw","bye"]))
// const val = fn(["hi","hlw"]).toUpperCase() // it fails to figurout it
function identity(arg) {
    return arg;
}
let op1 = identity("myString").toUpperCase(); // it allow now to use toUpperCase
let op2 = identity(2);
