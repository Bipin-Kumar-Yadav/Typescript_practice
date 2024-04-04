interface User {
    id:string;
    name:string;
    age:number;
    password: string;
    email : string;
}


type UpdateProps = Pick<User, 'name' | 'age' | 'password'>

function updateUser(updateProps : UpdateProps){
    // hit the database and update the user strict arguments
}

updateUser({name:"bipin", age:23, password : "234"})

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser2(updateProps : UpdatePropsOptional){
    // hit the database and update the user with optional arguments
}

updateUser2( {name: "bipin"} )


const a = [1,2,3]
a[0]= 4  // why this is possible but for string it is not possible
//  because we are changing the internal value of a not the reference of a 
// a=[3,4,2] // this will be not allowed

// const username = "Bipin"
// username="kumar"

type Person={
  readonly  name : string,
   readonly age : number,
}

const user : Person ={
    name : "Bipin",
    age : 23
}
//  user.name="Kumar" // it is allowed but if we made name and age as readonly then it will not be allowed

// method 1 
// interface Config {
//     apikey  : string,
//     endpoints : string,
// }

// const config :Readonly <Config> = {
//     endpoints :"https://api.examples.com",
//     apikey : "abcd1234"
// }

// config.apikey = '323kjl'

// method 2

interface Config {
    readonly apikey  : string,
    readonly endpoints : string,
}

const config :Config = {
    endpoints :"https://api.examples.com",
    apikey : "abcd1234"
}

// config.apikey = '323kjl' // this will be not allowed 