type User = {
    name: string,
    age: number,
    log:(name:string)=>string
}

type Role = {
    roleId:string,
    skills: string    
}

type User2 = User & Role;

let myUser: User2 = {
    name: `Sasha`,
    age: 23,
    roleId: 'admin',
    skills: `junior`,
    log(name) {
        return `${name}`
    },
}

interface UserFacebook{
    name: string,
    age: number,
    skills: string[],
    log: (name: string) => string    
}
interface RoleUsers{
    roleId:string
}
interface UserWithRole extends UserFacebook, RoleUsers{
    createAt:Date
}

let user: UserWithRole = {
    createAt: new Date(),
    name: "Anton",
    age: 34,
    skills: ['admin',`user`],
    log: function (name){
        return`${name}`;
    },
    roleId: `${new Date()}`
}