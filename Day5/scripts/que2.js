class User {
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins = 0;
        this.courses =[];
    }
    static greet(){
        console.log("Hello There");
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`);
        return this;
    }
    removeCoins(){
        this.lucoins--;
        console.log(`${this.name} has ${this.lucoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.lucoinsname}, email is ${this.email}`); 
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email,lucoins){
        super(name,age,email);
        this.lucoins = lucoins;
    }

    deleteUser(user){
        user = users.filter(u =>{
            return u.email != user.email;
        })
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteCourse(user,course){
        user.courses.delete(course);
        console.log(user);
    }
}

let user1 = new User('Teju',19,'teju@gmail.com');
let user2 = new User('Yamu',21,'yamu@gmail.com');
let mod = new Moderator('Saish',8,'sai@gmail.com');
let admin = new Admin('Ammu',18,'ammu@gmail.com');
let users = [user1,user2,mod,admin];

user1.login().addCoins().addCoins().addCoins().removeCoins().logout();

users.forEach(element => {
    console.log(element);
});

User.greet();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user2,'DataStructures');



