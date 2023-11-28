//Classes
// class User {
//     public email : string //public : default
//     private name: string //private : not accessible
//     readonly city: string = "shiraz" //readonly : not allowed to set it
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }

class User {
    protected _courseCount = 1
    readonly city: string = "shiraz"
    constructor(
        public email: string,
        public name: string,
        //private userId: string
    ){
    }
    private deleteToken() {
        console.log("Token deleted!");
    }
    get getAppleEmail(): string{
        return `apple${this.email }`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}


const Narcis = new User("n@n.com","Narcis")
//Narcis.name //Error
