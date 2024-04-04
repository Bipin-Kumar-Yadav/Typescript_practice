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