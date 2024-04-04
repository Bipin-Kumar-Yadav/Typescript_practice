/*----------- Pick and Partial Api in ts --------------------------- */

// interface User {
//     id:string;
//     name:string;
//     age:number;
//     password: string;
//     email : string;
// }


// type UpdateProps = Pick<User, 'name' | 'age' | 'password'>

// function updateUser(updateProps : UpdateProps){
//     // hit the database and update the user strict arguments
// }

// updateUser({name:"bipin", age:23, password : "234"})

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser2(updateProps : UpdatePropsOptional){
//     // hit the database and update the user with optional arguments
// }

// updateUser2( {name: "bipin"} )

/*-------------------- Readonly api ------------------------- */

// const a = [1,2,3]
// a[0]= 4  // why this is possible but for string it is not possible
//  because we are changing the internal value of a not the reference of a 
// a=[3,4,2] // this will be not allowed

// const username = "Bipin"
// username="kumar"

// type Person={
//   readonly  name : string,
//    readonly age : number,
// }

// const user : Person ={
//     name : "Bipin",
//     age : 23
// }
//  user.name="Kumar" // it is allowed but if we made name and age as readonly then it will not be allowed


/* --------- Real world use of readonly ----------------------------- */
/*---------------------- method 1 ----------------------------*/ 
// interface Config {
//     apikey  : string,
//     endpoints : string,
// }

// const config :Readonly <Config> = {
//     endpoints :"https://api.examples.com",
//     apikey : "abcd1234"
// }

// config.apikey = '323kjl'

/*-------------------------- method 2 -----------------------------*/

// interface Config {
//     readonly apikey  : string,
//     readonly endpoints : string,
// }

// const config :Config = {
//     endpoints :"https://api.examples.com",
//     apikey : "abcd1234"
// }

// config.apikey = '323kjl' // this will be not allowed 



/*---------------- giving type to complex objects --------------------- */

// const Users {
//     "1" : {
//         age :22,
//         name : "Bipin"
//     },
//     "2" : {
//         age : 23,
//         name : "Bipin"
//     }

// }

// type User = {
//     age :number,
//     name : string,
// }

// type Users = Record<string,User>

// const users : Users = {
//     '1' : {
//         age:23,
//         name : "Bipin"
//     },
//     '2' : {
//         age :23,
//         name : "Bipin"
//     }
// }
// console.log(users)


/*-------- Maps in js -------------------------- */
const users = new Map()
users.set("1",{name : "Bipin", age : 23});
users.set('2',{name:"Kumar", age:23})
const user =users.get('1');
console.log(user)
users.delete('2')
console.log(users)


// we can assign type to map as new Map<string,User>()

/* ------------ Exclude -------------- */
type EventExclued = 'click' | 'scroll' | 'mousemove';
type newEventExclued = Exclude<EventExclued,'scroll'>

const hanleEvent =(event : newEventExclued)=>{

}
hanleEvent('click')
// hanleEvent('scroll') // gives scroll is not assignable error