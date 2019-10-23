import { University } from './university.model';

export class User {
    _id: String;
    name: String;
    lastName: String;
    lastName2: String;
    age: Number;
    gender: String;
    phone: Number;
    email: String;
    password: String;
    confirmPassword: String;
    school: University;
    photo: string;
    constructor() {
        this._id ='';
        this.name = '';
        this.lastName = '';
        this.lastName2 = '';
        this.age = 18;
        this.gender = '';
        this.phone = 0;
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.school = new University();
        this.photo = '';
    }

    //review, message, wishlist, post, rentalHistory
}