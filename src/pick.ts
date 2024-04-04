interface User {
    id:string;
    name:string;
    age:number;
    password: string;
    email : string;
}


type UpdateProps = Pick<User, 'name' | 'age' | 'password'>

function updateUser(updateProps : UpdateProps){
    // hit the database call and update the user
}